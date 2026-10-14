import urllib.request, re
url = 'http://127.0.0.1:8000/'
print('URL:', url)
response = urllib.request.urlopen(url, timeout=10)
html = response.read().decode('utf-8')
print('STATUS', response.getcode())
match = re.search(r'fetch\(\s*(["\'])(.*?)\1', html)
print('FETCH:', match.group(2) if match else 'MISSING')
match2 = re.search(r'<form[^>]+action=["\']([^"\']+)["\']', html)
print('ACTION:', match2.group(1) if match2 else 'MISSING')
print('CSRF_TOKEN_PRESENT', 'csrf_token' in html)
print('QUESTION_NAME_PRESENT', 'name="question"' in html)
