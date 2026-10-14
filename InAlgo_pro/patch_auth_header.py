from pathlib import Path

base = Path(__file__).resolve().parent

# Patch header.html
header_path = base / 'templates' / 'header.html'
text = header_path.read_text(encoding='utf-8')
text = text.replace(
    '            <a class="text-white text-decoration-none" href="{% url \'login_view\' %}">Sign In</a>',
    '            {% if request.user.is_authenticated %}\n                <span class="text-white">Hi {{ request.user.first_name|default:request.user.username }}</span>\n                <a class="text-white text-decoration-none" href="{% url \'logout\' %}">Logout</a>\n            {% else %}\n                <a class="text-white text-decoration-none" href="{% url \'login_view\' %}">Sign In</a>\n            {% endif %}'
)
header_path.write_text(text, encoding='utf-8')

# Patch views.py
views_path = base / 'InAlgo_app' / 'views.py'
text = views_path.read_text(encoding='utf-8')
text = text.replace(
    'from django.contrib.auth import login, authenticate\n',
    'from django.contrib.auth import login, authenticate, logout\n'
)
text = text.replace(
    "return render(request, 'login.html')\n",
    "return render(request, 'login.html')\n\ndef logout_view(request):\n    logout(request)\n    return redirect('home')\n"
)
views_path.write_text(text, encoding='utf-8')

# Patch urls.py
urls_path = base / 'InAlgo_app' / 'urls.py'
text = urls_path.read_text(encoding='utf-8')
text = text.replace(
    "    path('login/', views.login_view, name='login_view'),\n",
    "    path('login/', views.login_view, name='login_view'),\n    path('logout/', views.logout_view, name='logout'),\n"
)
urls_path.write_text(text, encoding='utf-8')

print('patched')
