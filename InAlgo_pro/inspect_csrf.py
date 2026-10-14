import urllib.request, re
url='http://127.0.0.1:8000/'
resp = urllib.request.urlopen(url, timeout=10)
html = resp.read().decode('utf-8', errors='ignore')
print('STATUS', resp.getcode())
print('HAS_CSRF', 'csrfmiddlewaretoken' in html)
print('HAS_CSRF_TOKEN', 'name="csrfmiddlewaretoken"' in html)
print('FORM_ACTION', re.search(r'<form[^>]+action=["\']([^"\']+)["\']', html).group(1) if re.search(r'<form[^>]+action=["\']([^"\']+)["\']', html) else 'NONE')
print('FETCH_URL', re.search(r'fetch\(\s*(["\'])(.*?)\1', html).group(2) if re.search(r'fetch\(\s*(["\'])(.*?)\1', html) else 'NONE')
for mo in re.finditer(r'name="csrfmiddlewaretoken" value="([^"]+)"', html):
    print('TOKEN', mo.group(1))
