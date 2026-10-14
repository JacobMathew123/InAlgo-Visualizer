from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import login, authenticate, logout
from InAlgo_app.utils import get_ds_explanation, get_step_explanation
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
import asyncio
import json
import logging
import re
from django.db.models import Prefetch
from django.db import IntegrityError


logger = logging.getLogger(__name__)


@ensure_csrf_cookie
def home(request):
    return render(request, 'home.html')


def visualization(request, ds_type='array'):
    supported = [
        'array', 'stack', 'queue', 'simplequeue', 'circularqueue',
        'priorityqueue', 'deque', 'linkedlist', 'singlylinkedlist',
        'doublylinkedlist', 'circularlinkedlist',
        'heap', 'maxheap', 'minheap', 'binaryheap', 'binomialheap', 'fibonacciheap',
        'binarytree', 'bst', 'avltree', 'redblacktree', 'btree',
        'bplustree', 'prefixtree', 'trie', 'suffixtree',
        'inorder', 'preorder', 'postorder', 'levelorder', 'treetraversal',
        'graphtraversal', 'bfs', 'dfs',
        'mst', 'prims', 'kruskals',
        'shortestpath', 'dijkstra', 'bellmanford', 'floydwarshall', 'astar',
        'graphother', 'cycledetection', 'topologicalsort', 'connectedcomponents',
        'hashtable', 'hashing', 'hash',
        'search', 'linearsearch', 'binarysearch',
        'sorting', 'bubblesort', 'selectionsort', 'insertionsort', 'mergesort',
        'quicksort', 'heapsort', 'shellsort', 'countingsort', 'radixsort', 'bucketsort',
        'graph', 'graphalgo'
    ]
    normalized = (ds_type or 'array').lower().replace('-', '').replace(' ', '')
    if normalized == 'linkedlist':
        normalized = 'singlylinkedlist'
    if normalized == 'queue':
        normalized = 'simplequeue'
    if normalized == 'trie':
        normalized = 'prefixtree'
    if normalized == 'heap':
        normalized = 'maxheap'
    if normalized == 'hash':
        normalized = 'hashtable'
    if normalized not in supported:
        normalized = 'array'
    return render(request, 'visualization.html', {'ds_type': normalized})


@csrf_exempt
def chatbot(request):
    if request.method != "POST":
        return JsonResponse({"error": "Chatbot requests must use POST."}, status=405)

    question = request.POST.get("question", "").strip()
    if not question:
        return JsonResponse({"error": "Enter a question before sending."}, status=400)
    if len(question) > 4000:
        return JsonResponse({"error": "Questions must be 4,000 characters or fewer."}, status=400)

    try:
        conversation = json.loads(request.POST.get("history", "[]"))
    except json.JSONDecodeError:
        return JsonResponse({"error": "Conversation history must be valid JSON."}, status=400)

    if not isinstance(conversation, list):
        return JsonResponse({"error": "Conversation history must be a list."}, status=400)

    history = []
    for message in conversation[-6:]:
        if not isinstance(message, dict):
            return JsonResponse({"error": "Conversation turns must be objects."}, status=400)
        role = message.get("role")
        content = message.get("content")
        if not isinstance(role, str) or role not in {"user", "assistant"} or not isinstance(content, str):
            return JsonResponse({"error": "Conversation turns have an invalid role or message."}, status=400)
        content = content.strip()
        if not content or len(content) > 4000:
            return JsonResponse({"error": "Conversation turns must contain 1 to 4,000 characters."}, status=400)
        history.append({"role": role, "content": content})

    try:
        response = get_ds_explanation(question, history=history)
        return JsonResponse({"response": response})
    except Exception:
        logger.exception("Unexpected chatbot request failure.")
        return JsonResponse({
            "error": "The chatbot could not answer right now. Please try again."
        }, status=500)


@csrf_exempt
def explain_step(request):
    """
    Asynchronously explains a single visualization step using Gemini.
    Non-blocking endpoint that provides live AI insights to the visualization page.
    """
    if request.method == "POST":
        structure = request.POST.get("structure", "").strip()
        operation = request.POST.get("operation", "").strip()
        status_message = request.POST.get("status_message", "").strip()
        active_code = request.POST.get("active_code", "").strip()
        step_index = request.POST.get("step_index", "1")
        total_steps = request.POST.get("total_steps", "1")
        data_summary = request.POST.get("data_summary", "").strip()
        previous_step_summary = request.POST.get("previous_step_summary", "").strip()
        next_step_summary = request.POST.get("next_step_summary", "").strip()
        pointers_summary = request.POST.get("pointers_summary", "").strip()

        if status_message:
            try:
                explanation = get_step_explanation(
                    structure=structure,
                    operation=operation,
                    status_message=status_message,
                    active_code=active_code,
                    step_index=step_index,
                    total_steps=total_steps,
                    data_summary=data_summary,
                    previous_step_summary=previous_step_summary,
                    next_step_summary=next_step_summary,
                    pointers_summary=pointers_summary,
                )
                return JsonResponse({"explanation": explanation, "status": "success"})
            except Exception:
                logger.exception("Unexpected paused-step AI tutor failure.")
                return JsonResponse({
                    "explanation": "AI Tutor could not analyze this paused step. Please try again.",
                    "error": "Step analysis failed.",
                    "status": "error"
                })

    return JsonResponse({"error": "Invalid request or missing status message"}, status=400)



def register(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '').strip()

        password_regex = r'^(?=.*[A-Za-z])(?=.*\d).{8,}$'

        if not name or not email or not password:
            messages.error(request, 'All fields are required')
        elif User.objects.filter(email__iexact=email).exists() or User.objects.filter(username__iexact=email).exists():
            messages.error(request, 'Email already exists')
        elif not re.match(password_regex, password):
            messages.error(request, 'Password must be at least 8 characters long and include at least one letter and one number.')
        else:
            try:
                user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
                user.save()
                messages.success(request, 'Account created successfully! Please login!')
                return redirect('login_view')
            except IntegrityError:
                messages.error(request, 'Email already exists')
    return render(request, 'register.html')


# login validation

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid email or password')
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('home')






    