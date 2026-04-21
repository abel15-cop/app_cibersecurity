import urllib.request
import urllib.parse
import re
import time

queries = [
    ("net-1", "modelo osi y tcp ip explicacion espanol"),
    ("net-2", "como funciona dns y http espanol"),
    ("net-3", "subneteo ipv4 redes espanol"),
    ("net-4", "instalar kali linux paso a paso espanol"),
    ("off-1", "fases del ethical hacking pentesting espanol"),
    ("off-2", "osint y google dorks ciberseguridad espanol"),
    ("off-3", "tutorial nmap escaneo espanol"),
    ("off-4", "tutorial metasploit framework espanol"),
    ("web-1", "inyeccion sql sqli practico espanol"),
    ("web-2", "cross site scripting xss espanol"),
    ("web-3", "vulnerabilidad lfi rfi espanol"),
    ("web-4", "tutorial burp suite proxy espanol"),
    ("cry-1", "criptografia simetrica y asimetrica espanol"),
    ("cry-2", "hashing sha256 ciberseguridad espanol"),
    ("cry-3", "como funciona https ssl tls espanol"),
    ("def-1", "que es siem y soc ciberseguridad espanol"),
    ("def-2", "tutorial snort ids ips espanol"),
    ("def-3", "respuesta incidentes ciberseguridad espanol"),
    ("cld-1", "seguridad en aws cloud espanol"),
    ("cld-2", "seguridad en contenedores docker espanol"),
    ("com-1", "rgpd proteccion de datos explicacion espanol"),
    ("com-2", "iso 27001 requisitos explicacion espanol")
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

results = {}

for id, query in queries:
    url = f"https://html.duckduckgo.com/html/?q=site:youtube.com+{urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers=headers)
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        matches = re.findall(r'href="[^"]*?(youtube\.com/watch%3Fv%3D[\w-]+)[^"]*"', html)
        if matches:
            vid = matches[0].replace('%3F', '?').replace('%3D', '=')
            results[id] = f"https://www.{vid}"
            print(f"{id}: https://www.{vid}")
        else:
            print(f"{id}: NOT FOUND")
    except Exception as e:
         print(f"{id}: ERROR {e}")
    time.sleep(1)

print("\n--- DONE ---")
