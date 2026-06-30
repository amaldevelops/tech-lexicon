# Local LLM Setup

## Hardware
- With an 4 GB VRAM and 32 GB of RAM, capable of running a good range of local LLMs, but you'll want to stick to smaller or quantized models. The 32 GB of system RAM is a big advantage because it allows CPU offloading when the GPU runs out of VRAM. The biggest limitation is the 4 GB of VRAM. If your goal is coding, software development, or a personal AI assistant, a 7B model running through Ollama or LM Studio is likely to give you the best balance of quality and speed on your hardware.

### Runs very well

- 3B–4B models
- 7B–8B models in 4-bit quantization (with some CPU offloading)
- Embedding models for semantic search
- Small coding models

### Usable, but slower

- 12B–14B models (4-bit, significant CPU offloading)
- Vision-language models with modest image sizes

### Generally not practical

- 32B+ models for interactive use
- 70B models (they'll run only under very constrained setups and will be too slow for most workflows)

### Performance expectations

| Model size | Expected performance |
|----|----|
| 3B	| 25–60 tokens/sec |
| 7B | 10–25 tokens/sec |
| 14B | 3–8 tokens/sec |

- Actual speed depends on the software, quantization, prompt length, and how much of the model fits in VRAM.

### Good models for above hardware

- For general chat: Llama 3.2 3B | Qwen2.5 7B | Gemma 3 4B
- For coding: Qwen2.5-Coder 7B | DeepSeek-Coder 6.7B
- For reasoning: Smaller reasoning-oriented variants around 7B–8B are a better fit than larger flagship reasoning models.

## Setup
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

