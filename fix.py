import re
ids = ["ODY4q4_3Acc", "t7EGv2I5FpM", "SHbBso63X38", "sIcZqmJxan4", "x49doCJqtco", "KOT3JWaWSpI", "U5A3szBzne0", "43wbfCsFefg", "qLeeLRn9Z78", "b47UKL_KshI", "t15Xvv6k-1U", "KT6McmK0FgA", "wDpqrasDmxM", "NUEOvdZujP0", "6HJAWFenYx8", "xgxJUUaD3lg", "PHwaH6z0MJ0", "zjSpqNfH77c", "ym_oHKnoneE", "OIoXJP9zs7g", "heKapvVLjng", "iZNUDnf7QgQ"]
with open("src/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

def repl(match):
    global ids
    return f"'https://www.youtube.com/watch?v={ids.pop(0)}'"

content = re.sub(r"'https://www\.youtube\.com/watch\?v=[^']+'", repl, content, count=22)

with open("src/data.ts", "w", encoding="utf-8") as f:
    f.write(content)
print("done")
