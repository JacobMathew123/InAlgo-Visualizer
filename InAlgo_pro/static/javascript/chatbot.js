window.sharedChatbotLoaded = true;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const sendButton = document.getElementById('send_btn');
    const microphoneButton = document.getElementById('chatMicButton');
    const voiceStatus = document.getElementById('chatVoiceStatus');

    if (!form || !input || !messages || !sendButton) return;

    try {
        sessionStorage.removeItem('inalgo-chat-conversation-v1');
    } catch (error) {
        console.error('Could not clear the saved chatbot conversation.', error);
    }

    let conversation = [];
    const resizeInput = () => {
        input.style.height = 'auto';
        input.style.height = `${Math.min(input.scrollHeight, 150)}px`;
    };

    function appendMessage(className, text, formatted = false) {
        const message = document.createElement('div');
        message.className = `message ${className}`;
        if (formatted) {
            message.innerHTML = text;
        } else {
            message.textContent = text;
        }
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
        return message;
    }

    function appendAssistantMessage(text, { formatted = false, error = false, thinking = false } = {}) {
        const message = document.createElement('div');
        message.className = `message bot-message${error ? ' error' : ''}`;

        const logo = document.createElement('span');
        logo.className = 'bot-avatar';
        logo.setAttribute('aria-hidden', 'true');
        logo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M6.731 0 2 9.125h2.788L6.73 5.497l1.93 3.628h2.766zm4.694 9.125-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875z"/></svg>';
        message.appendChild(logo);

        if (thinking) {
            message.setAttribute('aria-label', 'Thinking');
            const label = document.createElement('span');
            label.textContent = 'Thinking';
            message.appendChild(label);

            const dots = document.createElement('span');
            dots.className = 'thinking-dots';
            dots.setAttribute('aria-hidden', 'true');
            for (let index = 0; index < 3; index += 1) {
                const dot = document.createElement('span');
                dot.className = 'thinking-dot';
                dot.textContent = '.';
                dots.appendChild(dot);
            }
            message.appendChild(dots);
        } else {
            const content = document.createElement('span');
            if (formatted) {
                content.innerHTML = text;
            } else {
                content.textContent = text;
            }
            message.appendChild(content);
        }

        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
        return message;
    }

    input.addEventListener('input', resizeInput);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            form.requestSubmit();
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const question = input.value.trim();
        if (!question || sendButton.disabled) return;

        appendMessage('user-message', `You: ${question}`);
        input.value = '';
        resizeInput();

        const thinkingMessage = appendAssistantMessage('', { thinking: true });
        sendButton.disabled = true;

        try {
            const csrfToken = form.querySelector('[name=csrfmiddlewaretoken]')?.value || '';
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    question,
                    history: JSON.stringify(conversation.slice(-6))
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || `Server returned HTTP ${response.status}.`);
            }
            if (typeof data.response !== 'string') {
                throw new Error('The server returned an invalid chatbot response.');
            }

            thinkingMessage.remove();
            appendAssistantMessage(data.response, { formatted: true });
            const responseText = document.createElement('div');
            responseText.innerHTML = data.response;
            responseText.querySelectorAll('br').forEach((lineBreak) => {
                lineBreak.replaceWith('\n');
            });
            conversation.push(
                { role: 'user', content: question },
                { role: 'assistant', content: responseText.textContent.trim() }
            );
            conversation = conversation.slice(-6);
        } catch (error) {
            thinkingMessage.remove();
            appendAssistantMessage(error.message || 'Could not fetch response.', { error: true });
        } finally {
            sendButton.disabled = false;
            input.focus();
        }
    });

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!microphoneButton || !voiceStatus) return;

    if (!SpeechRecognition) {
        microphoneButton.disabled = true;
        microphoneButton.title = 'Speech input is not supported in this browser.';
        voiceStatus.textContent = 'Speech input is not supported in this browser.';
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = document.documentElement.lang || 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    let isListening = false;
    let startingText = '';
    let finalTranscript = '';

    microphoneButton.addEventListener('click', () => {
        if (isListening) {
            recognition.stop();
            return;
        }

        startingText = input.value.trim();
        finalTranscript = '';
        voiceStatus.textContent = 'Listening. Speak your question now.';
        try {
            recognition.start();
        } catch (error) {
            voiceStatus.textContent = `Could not start speech input: ${error.message}`;
        }
    });

    recognition.addEventListener('start', () => {
        isListening = true;
        microphoneButton.classList.add('is-listening');
        microphoneButton.title = 'Stop speech input';
        microphoneButton.setAttribute('aria-label', 'Stop speech input');
        voiceStatus.textContent = 'Listening. Speak your question now.';
    });

    recognition.addEventListener('result', (event) => {
        let interimTranscript = '';
        for (let index = event.resultIndex; index < event.results.length; index++) {
            const transcript = event.results[index][0].transcript;
            if (event.results[index].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }
        const spokenText = `${finalTranscript} ${interimTranscript}`.trim();
        input.value = [startingText, spokenText].filter(Boolean).join(' ');
        resizeInput();
    });

    recognition.addEventListener('error', (event) => {
        const errorMessages = {
            'not-allowed': 'Microphone permission was denied. Allow microphone access and try again.',
            'no-speech': 'No speech was detected. Try speaking closer to the microphone.',
            'audio-capture': 'No microphone was found.'
        };
        voiceStatus.textContent = errorMessages[event.error]
            || `Speech input failed: ${event.error}.`;
    });

    recognition.addEventListener('end', () => {
        isListening = false;
        microphoneButton.classList.remove('is-listening');
        microphoneButton.title = 'Ask a question using your microphone';
        microphoneButton.setAttribute('aria-label', 'Ask a question using your microphone');
        if (finalTranscript) {
            voiceStatus.textContent = 'Speech added to your question.';
        }
        input.focus();
    });
});
