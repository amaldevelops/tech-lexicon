# Local LLM Setup: Ubuntu Host ⇄ Ubuntu Server VM
### Optimizing OpenClaw for Headless Environments & Limited VRAM

This guide is tailored specifically to an **Ubuntu Host** running an **Ubuntu Server VM** setup. Since Ubuntu Server doesn't use a GUI, everything below is optimized for pure terminal interaction.

---

## 💻 Hardware & Realities

* **The Setup:** Ubuntu Host with 4 GB VRAM and 32 GB of RAM, running an Ubuntu Server VM.
* **The Bottleneck:** While 32 GB of host RAM allows CPU offloading when VRAM overflows, OpenClaw demands a massive context window (64k tokens). This memory footprint easily overflows a 4 GB card, dragging down generation speeds. Keeping the model size lightweight is crucial for speed.

### Model Performance (64k Context Active)

| Model Size | Status | Speed Expectation |
| :--- | :--- | :--- |
| **1.5B – 3B** | **Runs Best** | Fast, snappy responses; fits completely within VRAM. |
| **4B – 7B** | **Usable but Slow** | Heavy CPU offloading once context expands. Expect slowdowns. |
| **8B+** | **Not Practical** | Drastic slowdowns, frequent timeouts, or out-of-memory errors. |

### Recommended Models for This Hardware
* **General Chat & Coding:** `qwen3.5:3b` or `qwen3.5:1.5b` *(Highly recommended to avoid severe CPU lag while meeting OpenClaw's context requirements)*.
* **Alternative:** `llama3.2:3b`.

---

## 🧱 OVERALL ARCHITECTURE

```plaintext
Ubuntu Server VM (Client / OpenClaw TUI)
        ↓ 
Internal Virtual Network Bridge (e.g., 192.168.122.1:11434)
        ↓ 
Ubuntu Desktop/Host (Ollama Server + Models + GPU)

```

---

## 🛠️ STEP-BY-STEP IMPLEMENTATION

### ✅ STEP 1 — Install Ollama on Ubuntu (HOST)

On your main Ubuntu host machine, open your terminal and run the official installation script:

```bash
curl -fsSL https://ollama.com/install.sh | sh

```

### 🧠 STEP 2 — Download a Lightweight Model

To prevent OpenClaw from stalling due to CPU offloading on your 4 GB card, pull an optimized 3B model variant:

```bash
ollama run qwen3.5:3b

```

### 🌐 STEP 3 — Configure Ollama & Fix OpenClaw Timeouts (CRITICAL)

Because OpenClaw pushes a massive bootstrap prompt, Ollama’s default 4k context limits will truncate the conversation and cause errors. We must configure Ollama to listen to the network, expand its context window, and compress its memory state.

Run these commands on your **Ubuntu Host**:

1. Create the systemd configuration directory:
```bash
sudo mkdir -p /etc/systemd/system/ollama.service.d

```


2. Open and edit the override file:
```bash
sudo nano /etc/systemd/system/ollama.service.d/override.conf

```


3. Paste this exact configuration block:
```ini
[Service]
Environment="OLLAMA_HOST=0.0.0.0"
Environment="OLLAMA_NUM_CTX=65536"
Environment="OLLAMA_CONTEXT_LENGTH=65536"
Environment="OLLAMA_KV_CACHE_TYPE=q4_0"

```


> **What this does:**
> * `OLLAMA_HOST=0.0.0.0`: Opens Ollama up to your internal VM network interface.
> * `OLLAMA_NUM_CTX` & `OLLAMA_CONTEXT_LENGTH`: Expands the memory canvas to 64k so OpenClaw doesn't crash.
> * `OLLAMA_KV_CACHE_TYPE=q4_0`: Quantizes (compresses) the context window memory to save your precious 4 GB VRAM.
> 
> 


4. Apply changes and restart the daemon:
```bash
sudo systemctl daemon-reload && sudo systemctl restart ollama

```


5. Verify Ollama is successfully listening:
```bash
ss -tlnp | grep 11434

```


*(It should cleanly print `*:11434` or `0.0.0.0:11434`)*

### 🔒 STEP 4 — Open the Ubuntu Host Firewall (UFW)

The Ubuntu host firewall blocks incoming connections from VMs by default. Run this on your **Ubuntu Host** to allow your Ubuntu Server VM subnet through:

```bash
sudo ufw allow from 192.168.122.0/24 to any port 11434 proto tcp

```

### 🔎 STEP 5 — Find Your Host IP Address

Run this on the **Ubuntu Host** to find the network bridge IP assigned to your VM setup:

```bash
hostname -I

```

*(Commonly `192.168.122.1` for default KVM/Libvirt configurations).*

### 🧪 STEP 6 — Test and Link inside OpenClaw (Ubuntu Server VM)

SSH into or switch over to your **Ubuntu Server VM** terminal.

1. **Run a physical connectivity test**
Verify that your VM can reach the host machine over the network bridge:
```bash
curl http://192.168.122.1:11434

```


*(It should instantly print `"Ollama is running"`).*
2. **Configure the Model inside OpenClaw TUI**
Launch your OpenClaw TUI inside the server terminal and configure the framework:
* Bring up the visual model picker using the slash command: `/model`
* Use your arrow keys to scroll down to `ollama/qwen3.5:3b`.
* Press `Tab` to check/mark it, and hit `Enter` to confirm.


3. **Optimize the Environment**
Disable complex agent reasoning loops that choke small local models:
```plaintext
/think off

```


Clear out any lingering cached failed states from previous errors:
```plaintext
/reset

```



---

## 🔎 Diagnostics, Troubleshooting & Maintenance

### 🛠️ Useful Debugging Diagnostics

Run these on your **Ubuntu Host** to monitor real-time performance:

* `ollama ps` : See how much of the model is fitting inside your GPU vs overflowing to the CPU.
* `nvidia-smi` : Confirms your graphics card is actively accelerating the model weights.
* `sudo journalctl -u ollama -f` : Tunnels into live Ollama system logs to track incoming connection requests from the VM.

### 🚨 Troubleshooting Common Issues

* **Error: "Connection Refused" inside the VM**
* *Fix:* Double-check your host's IP with `hostname -I`. If you are using VirtualBox instead of KVM/Libvirt, the bridge IP might be `10.0.2.2` or `192.168.56.1` instead of `192.168.122.1`. Update your UFW rule and `curl` test to match.


* **Context window cuts off early anyway**
* *Fix:* Some versions of Ollama require the context window to be explicitly requested by the client application. If OpenClaw allows custom parameter configurations, ensure its internal `num_ctx` setting is also matched to `65536`.


* **Extreme Lag / System Freezing**
* *Fix:* Your 4 GB VRAM is fully saturated. Try dropping down to the `qwen3.5:1.5b` model. It features a smaller footprint, significantly reducing the reliance on slow system RAM offloading.



### 🔄 Updating and Maintaining Your Setup

To keep your backend fast and secure, use these quick maintenance commands on your **Ubuntu Host**:

* **Update Ollama:** Simply re-run the install script; it will safely overwrite the binary while preserving your downloaded models and custom `override.conf` configurations:
```bash
curl -fsSL https://ollama.com/install.sh | sh

```


* **Update the Model:** Pull the latest weights for your lightweight model:
```bash
ollama pull qwen3.5:3b

```
