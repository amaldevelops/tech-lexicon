# 🛠️ The Ultimate Ubuntu Lab Guide (2026)

This document outlines the architecture, setup, and optimization of a high-performance virtualized environment for **AI Development** and **Cybersecurity**.

---

## 1. High-Level Architecture

For maximum stability and performance, utilize a **Layered Isolation Strategy**. Keeping your workloads in separate VMs prevents an experimental "noisy" cyber script from crashing your long-running AI training models.

### Recommended VM Profiles

| VM Type           | Primary Use Case         | Recommended OS              | Why?                                                    |
| :---------------- | :----------------------- | :-------------------------- | :------------------------------------------------------ |
| **AI / Dev**      | LLMs, Stable Diffusion   | **Ubuntu 24.04 / Pop!\_OS** | Native CUDA/NVIDIA driver support.                      |
| **Cybersecurity** | Pentesting, Malware Labs | **Kali / Parrot OS**        | Hardened kernels; 600+ tools pre-installed.             |
| **Software Test** | Clean-room experiments   | **Fedora / Debian**         | Bleeding-edge kernels (Fedora) or rock-solid stability. |

> **Hardware Reality Check:** To run these concurrently, aim for **32GB RAM**, an **NVMe SSD**, and an **8+ Core CPU**.

---

## 2. Choosing Your Hypervisor

Since you are on Ubuntu, **KVM (Kernel-based Virtual Machine)** is the professional choice.

- **KVM/QEMU + Virt-Manager:** The "Native" path. Near-metal speeds and superior GPU passthrough.
- **Oracle VirtualBox:** Easier UI, but significantly slower for resource-heavy AI tasks.
- **VMware Workstation Pro:** Excellent 3D acceleration and now free for personal use.

---

## 3. High-Performance VM Creation

When creating a VM in **Virt-Manager**, follow these steps to move beyond "default" (slow) settings.

### Initial Creation

1.  Click **New Virtual Machine** > **Local install media (ISO)**.
2.  **Memory/CPU:** Assign 8–16GB RAM for AI VMs; 4GB is plenty for Cyber.
3.  **Storage:** Use `qcow2` format. Leave it dynamic unless you need absolute peak speed.
4.  **CRITICAL:** Check the box **"Customize configuration before install"** at the final step.

### The "Optimal Settings" Checklist

- **CPU (Essential for AI):** Change the Model to **`host-passthrough`**. This allows the VM to see specialized physical instructions (like AVX-512) required by $PyTorch$ and $TensorFlow$.
- **Disk (VirtIO):** Set **Disk bus** to **VirtIO**. Set **Discard mode** to `unmap` so the VM returns unused space to your SSD.
- **Network:** Ensure the **Device model** is **`virtio`** for high-speed Linux-on-Linux networking.
- **Video & Display:** Use **`Virtio`** Video model and check **3D Acceleration**. Set Spice Listen type to `None` and check **OpenGL** for a lag-free UI.
- **Cleanup:** Remove the **Tablet**, **Sound**, and **USB Redirector** devices if they aren't strictly necessary.

---

## 4. Advanced Workflow & "Secret Sauce"

### The Snapshot Trick

Before installing complex AI drivers or running untrusted scripts, take a **Snapshot** (the lightbulb/camera icon). If you break the guest OS, you can revert to a clean state in seconds rather than reinstalling.

### Isolated Networking for Cyber

In the Network settings, use **Isolated** mode. This allows the VM to talk to the host (for file transfers) but prevents it from reaching your local Wi-Fi or LAN—essential when handling "unfriendly" scripts.

### Shared Folders (Virtio-fs)

This is the fastest way to move large AI models between your host and VM.

1.  **Add Hardware > Filesystem** in Virt-Manager.
2.  **Driver:** `virtiofs` | **Source:** `/your/host/folder` | **Target Tag:** `my_share`.
3.  **In the Guest VM:**
    ```bash
    sudo mkdir /mnt/shared
    sudo mount -t virtiofs my_share /mnt/shared
    ```

### GPU Passthrough (The AI Game-Changer)

To run LLMs (like Llama 3) at full speed, you must give the VM direct access to your NVIDIA GPU.

1.  **Add Hardware > PCI Host Device**.
2.  Select your **NVIDIA GPU** and its **Audio Controller**.
3.  _Note:_ This requires "blacklisting" the driver on the host Ubuntu so it doesn't fight the VM for control.
