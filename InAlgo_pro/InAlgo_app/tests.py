import json
import requests
from django.test import TestCase
from django.urls import reverse
from unittest.mock import Mock, patch

from InAlgo_app.utils import (
    _build_gemini_payload,
    call_gemini,
    format_response,
    get_ds_explanation,
    get_step_explanation,
)


class VisualizationViewTests(TestCase):
    def test_visualization_page_renders_for_supported_structure(self):
        response = self.client.get(reverse('visualization', args=['array']))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Array Visualizer')
        self.assertContains(response, 'id="structureNotesLink"')
        self.assertContains(response, 'https://www.geeksforgeeks.org/dsa/array-data-structure-guide/')
        html = response.content.decode()
        pseudocode_card_end = html.index('</div>', html.index('class="pseudocode-card"'))
        notes_link_start = html.index('id="structureNotesLink"')
        self.assertGreater(notes_link_start, pseudocode_card_end)
        self.assertContains(response, 'Click to read Array Notes')
        self.assertContains(response, 'chatMicButton')
        self.assertContains(response, 'javascript/chatbot.js')

    def test_home_page_renders_shared_chatbot_controls(self):
        response = self.client.get(reverse('home'))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'chatMicButton')
        self.assertContains(response, 'javascript/chatbot.js')


class ChatbotViewTests(TestCase):
    @patch('InAlgo_app.views.get_ds_explanation')
    def test_chatbot_passes_question_and_recent_conversation(self, get_explanation):
        get_explanation.return_value = 'A queue is FIFO.'
        history = [
            {'role': 'user', 'content': 'What does FIFO mean?'},
            {'role': 'assistant', 'content': 'First in, first out.'},
        ]

        response = self.client.post(
            reverse('chatbot'),
            {
                'question': 'Show me a queue example.',
                'history': json.dumps(history),
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'response': 'A queue is FIFO.'})
        get_explanation.assert_called_once_with(
            'Show me a queue example.',
            history=history,
        )

    def test_chatbot_rejects_invalid_conversation_history(self):
        response = self.client.post(
            reverse('chatbot'),
            {'question': 'Explain a queue.', 'history': '{not json'},
        )

        self.assertEqual(response.status_code, 400)
        self.assertIn('valid JSON', response.json()['error'])


class StepTutorViewTests(TestCase):
    @patch('InAlgo_app.views.get_step_explanation')
    def test_ai_tutor_receives_neighboring_frame_context(self, get_explanation):
        get_explanation.return_value = 'The comparison preserves the partition invariant.'

        response = self.client.post(
            reverse('explain_step'),
            {
                'structure': 'quicksort',
                'operation': 'partition',
                'status_message': 'Comparing arr[2] with pivot.',
                'active_code': 'if (arr[j] < pivot)',
                'step_index': '3',
                'total_steps': '8',
                'data_summary': '[8, 2, 7, 4]',
                'pointers_summary': '{"low":0,"high":3,"i":0,"j":2}',
                'previous_step_summary': '{"status":"Previous compare","data":[8,2,7,4]}',
                'next_step_summary': '{"status":"Swap into partition","data":[2,8,7,4]}',
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['explanation'], get_explanation.return_value)
        get_explanation.assert_called_once_with(
            structure='quicksort',
            operation='partition',
            status_message='Comparing arr[2] with pivot.',
            active_code='if (arr[j] < pivot)',
            step_index='3',
            total_steps='8',
            data_summary='[8, 2, 7, 4]',
            pointers_summary='{"low":0,"high":3,"i":0,"j":2}',
            previous_step_summary='{"status":"Previous compare","data":[8,2,7,4]}',
            next_step_summary='{"status":"Swap into partition","data":[2,8,7,4]}',
        )


class ChatbotResponseFormattingTests(TestCase):
    def test_system_instruction_uses_gemini_api_field_name(self):
        payload = _build_gemini_payload(
            [
                {'role': 'system', 'content': 'Be concise.'},
                {'role': 'user', 'content': 'Explain a queue.'},
            ],
            temperature=0.4,
            max_tokens=256,
        )

        self.assertEqual(payload['systemInstruction'], {
            'parts': [{'text': 'Be concise.'}],
        })
        self.assertNotIn('system_instruction', payload)

    def test_diagram_code_blocks_are_displayed_and_html_escaped(self):
        response = format_response(
            'Queue order:\n```text\nfront -> A < B -> rear\n```'
        )

        self.assertIn('<pre class="chat-diagram"><code>', response)
        self.assertIn('front -&gt; A &lt; B -&gt; rear', response)
        self.assertNotIn('A < B', response)

    def test_current_question_follows_recent_conversation_in_gemini_payload(self):
        history = [
            {'role': 'user', 'content': 'What is FIFO?'},
            {'role': 'assistant', 'content': 'First in, first out.'},
        ]
        with patch('InAlgo_app.utils._get_api_key', return_value='test-key'):
            with patch('InAlgo_app.utils.call_gemini', return_value='Queue example.') as call_gemini:
                get_ds_explanation('Show a queue example.', history=history)

        messages = call_gemini.call_args.args[0]
        self.assertEqual(messages[-1], {
            'role': 'user',
            'content': 'Show a queue example.',
        })
        self.assertEqual(messages[1:3], history)

    def test_paused_step_analysis_uses_neighbor_frames_and_avoids_repeating_status(self):
        previous_frame = '{"data":[8,2,7],"pointers":{"i":0}}'
        next_frame = '{"data":[2,8,7],"pointers":{"i":1}}'
        pointers = '{"low":0,"high":2,"i":0,"j":1}'
        with patch('InAlgo_app.utils._get_api_key', return_value='test-key'):
            with patch('InAlgo_app.utils.call_gemini', return_value='Detailed reasoning.') as call_gemini:
                get_step_explanation(
                    structure='quicksort',
                    operation='partition',
                    status_message='Comparing arr[1] with the pivot.',
                    active_code='if (arr[j] < pivot)',
                    step_index=2,
                    total_steps=6,
                    data_summary='[8, 2, 7]',
                    previous_step_summary=previous_frame,
                    next_step_summary=next_frame,
                    pointers_summary=pointers,
                )

        prompt = call_gemini.call_args.args[0][1]['content']
        self.assertIn(previous_frame, prompt)
        self.assertIn(next_frame, prompt)
        self.assertIn(pointers, prompt)
        self.assertIn('do not paraphrase', prompt.lower())


class GeminiRequestFallbackTests(TestCase):
    @patch('InAlgo_app.utils._call_gemini_model')
    def test_unavailable_primary_model_uses_fallback(self, call_model):
        unavailable_model_error = requests.exceptions.HTTPError(
            response=Mock(status_code=404)
        )
        call_model.side_effect = [unavailable_model_error, 'Gemini reply.']

        with patch('InAlgo_app.utils._get_api_key', return_value='test-key'):
            with patch('InAlgo_app.utils.GEMINI_MODEL', 'primary-model'):
                with patch('InAlgo_app.utils.GEMINI_FALLBACK_MODEL', 'fallback-model'):
                    reply = call_gemini([{'role': 'user', 'content': 'Explain a queue.'}])

        self.assertEqual(reply, 'Gemini reply.')
        self.assertEqual(
            [call.args[0] for call in call_model.call_args_list],
            ['primary-model', 'fallback-model'],
        )

    @patch('InAlgo_app.utils._call_gemini_model')
    def test_authentication_error_does_not_use_fallback(self, call_model):
        authentication_error = requests.exceptions.HTTPError(
            response=Mock(status_code=403)
        )
        call_model.side_effect = authentication_error

        with patch('InAlgo_app.utils._get_api_key', return_value='test-key'):
            with patch('InAlgo_app.utils.GEMINI_MODEL', 'primary-model'):
                with patch('InAlgo_app.utils.GEMINI_FALLBACK_MODEL', 'fallback-model'):
                    with self.assertRaises(type(authentication_error)):
                        call_gemini([{'role': 'user', 'content': 'Explain a queue.'}])

        call_model.assert_called_once()
        self.assertEqual(call_model.call_args.args[0], 'primary-model')
