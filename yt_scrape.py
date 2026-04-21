import subprocess
import re
import sys

queries = [
    "modelo osi español explicacion redes",
    "como funciona dns explicacion español",
    "subneteo ipv4 desde cero español",
    "instalar kali linux paso a paso español",
    "fases pentesting ethical hacking español",
    "osint tutorial español",
    "nmap tutorial desde cero español",
    "metasploit tutorial español",
    "inyeccion sql sqli practico español",
    "cross site scripting xss practico español",
    "vulnerabilidad lfi español",
    "burp suite tutorial español",
    "criptografia simetrica y asimetrica español",
    "hashing sha256 explicacion español",
    "como funciona https y ssl español",
    "siem y soc ciberseguridad español",
    "snort ids tutorial español",
    "respuesta a incidentes de seguridad español",
    "seguridad aws cloud español",
    "seguridad en docker ciberseguridad español",
    "rgpd proteccion de datos explicacion español",
    "iso 27001 ciberseguridad explicacion español"
]

def get_video_url(query):
    try:
        res = subprocess.run(
            ["python", "-m", "yt_dlp", "--get-id", f"ytsearch1:{query}"],
            capture_output=True, text=True, check=True
        )
        # Handle cases where multiple lines are returned (should be 1 line)
        vid = res.stdout.strip().split('\n')[0]
        if vid:
            print(f"Fetched {vid} for: {query}")
            return f"https://www.youtube.com/watch?v={vid}"
    except Exception as e:
        print(f"Error on {query}: {e}")
    # fallback placeholder if failed
    return "https://www.youtube.com/watch?v=Jm00Gk_AotA"

print("Fetching URLs...")
urls = [get_video_url(q) for q in queries]

with open("src/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

for url in urls:
    content = re.sub(r"'https://www\.youtube\.com/watch\?v=[^']+'", f"'{url}'", content, count=1)

with open("src/data.ts", "w", encoding="utf-8") as f:
    f.write(content)
print("Done replacing URLs in src/data.ts")
