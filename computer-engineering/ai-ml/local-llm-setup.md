> Host (Ubuntu) runs the LLM locally
> Fedora VM talks to it over a safe network bridge

We’ll use:

* Ollama on the Ubuntu host
* Fedora VM as the client (dev + tools like “OpenClaw”)
* Local-only network exposure (safe, not internet-facing)

---

# 🧱 OVERALL ARCHITECTURE

```
Fedora VM (client tools / OpenClaw)
        ↓ HTTP request
Ubuntu Host (Ollama + models)
        ↓
Local LLM (Llama / Qwen / etc.)
```

---

# ✅ STEP 1 — Install Ollama on Ubuntu (HOST)

On your Ubuntu host:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```


---

# 🧠 STEP 2 — Download a model

Pick one:

### Best all-round:

```bash
ollama run llama3.5
```

---

- `nvidia-smi` : To check ollama is using Nvidia GPU
- `OLLAMA_NUM_CTX=8192 ollama run qwen3.5` : To run the model with lower context window so to speed up responses

# 🌐 STEP 3 — Allow network access (IMPORTANT)

By default, Ollama only listens on localhost. We must allow VM access.

### Stop service first:

```bash
sudo systemctl stop ollama
```

### Start Ollama exposed to local network:

```bash
OLLAMA_HOST=0.0.0.0 ollama serve
```

Leave this running.

---

# 🔎 STEP 4 — Find your host IP (for VM access)

On Ubuntu host:

```bash
ip a
```

Look for something like:

* `192.168.122.1` (common libvirt NAT bridge)
* or `10.0.2.x` depending on VM setup

👉 This is what the VM will use.

---

# 🔥 STEP 5 — Test from Fedora VM

Inside Fedora VM:

```bash
curl http://<HOST_IP>:11434/api/tags
```

Example:

```bash
curl http://192.168.122.1:11434/api/tags
```

If you see JSON output → connection works.

---

# 🧠 STEP 6 — Run a test prompt from VM

```bash
curl http://<HOST_IP>:11434/api/generate -d '{
  "model": "llama3.1",
  "prompt": "Write a Python function that sorts a list"
}'
```

You should get a streamed response.

---

# 🧩 STEP 7 — Make it easier (optional Python client)

Inside Fedora VM:

```bash
python3 -m pip install requests
```

Example script:

```python
import requests

url = "http://192.168.122.1:11434/api/generate"

data = {
    "model": "llama3.1",
    "prompt": "Explain recursion simply"
}

r = requests.post(url, json=data)

print(r.text)
```

---

# 🔒 STEP 8 — (IMPORTANT) Secure it properly

Right now, your LLM is accessible to anything on your local network.

### Safer option: bind only to VM network

Instead of `0.0.0.0`, use:

```bash
OLLAMA_HOST=192.168.122.1 ollama serve
```

OR restrict via firewall:

```bash
sudo ufw allow from 192.168.122.0/24 to any port 11434
```

---

# 🚀 STEP 9 — Make it auto-start (recommended)

Create a systemd override:

```bash
sudo systemctl edit ollama
```

Add:

```ini
[Service]
Environment="OLLAMA_HOST=0.0.0.0"
```

Then:

```bash
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

---

# 🧪 STEP 10 — Integrate with OpenClaw / tools

Whatever tool you’re using in the Fedora VM, configure:

```
Base URL:
http://<HOST_IP>:11434
```

Most tools support:

* OpenAI-compatible mode (sometimes needs adapter)
* or raw HTTP API (Ollama native)

---

# 🧠 BEST PRACTICE SETUP (what I recommend for you)

Given your privacy concerns + dev use:

### ✔ Host (trusted zone)

* Ubuntu
* Ollama + models
* GPU access

### ✔ VM (sandbox zone)

* Fedora
* OpenClaw / coding tools
* no model storage

### ✔ Communication

* local HTTP only (no internet needed)

---

# ⚠️ Common issues

### ❌ “connection refused”

→ Ollama still bound to localhost
Fix:

```bash
OLLAMA_HOST=0.0.0.0 ollama serve
```

---

### ❌ VM cannot reach host

→ wrong network mode
Fix:

* use “NAT (default)” or “bridge” in virt-manager
* check `ip route` in VM

