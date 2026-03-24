# Fedora 43 Workstation: VM Configuration Guide

## 1. Hardware Specification (The "Base" Build)

To ensure high performance for AI workloads while staying "lean" on your 200GB free space, use these settings in `virt-manager`:

| Component        | Setting                      | Reason                                                     |
| :--------------- | :--------------------------- | :--------------------------------------------------------- |
| **CPU Model**    | `host-passthrough`           | Passes physical AI instructions (AVX-512, etc.) to the VM. |
| **vCPUs**        | 6 Cores                      | Balanced for multitasking and AI agent execution.          |
| **Memory**       | 8GB (8192Mb)                 | Enable **Memory Ballooning** to reclaim RAM when idle.     |
| **Video**        | Virtio + **3D Acceleration** | Offloads GNOME GUI rendering to your physical GPU.         |
| **Disk Bus**     | **VirtIO**                   | Fastest disk I/O for virtualized environments.             |
| **Storage Type** | `qcow2`                      | Essential for **Linked Clones** and thin provisioning.     |

---

## 2. Storage Optimization (The Space-Savers)

On a 512GB drive, "Ghost Space" is your enemy. These two settings are **mandatory**:

### A. Enable Discard/TRIM

This ensures that when you delete a 5GB AI model _inside_ the VM, the 5GB is actually freed up on your _physical_ SSD.

- In `virt-manager` -> **VirtIO Disk** -> **Advanced Options**:
  - **Discard Mode:** `unmap`
  - **Detect Zeroes:** `on`

### B. Shared Data via VirtioFS

Do not copy your 300GB of datasets into the VM. "Bridge" them from your Ubuntu host:

- **Source Path:** `/home/maverick/datasets`
- **Target Tag:** `host_data`
- **Access Mode:** `readonly` (Safety first—stops rogue agents from deleting host files).

---

## 3. Base Image "Sealing" Checklist

Before you shut down this VM to use it as a **Linked Clone** template, run these commands inside the Fedora VM:

```bash
# 1. Update everything
sudo dnf update -y

# 2. Install the Dev & AI stack
sudo dnf install -y git python3-pip python3-devel gcc code podman-docker

# 3. Install Guest Tools (for Clipboard/Drag-and-Drop)
sudo dnf install -y qemu-guest-agent spice-vdagent

# 4. Clean up dnf cache to save ~500MB
sudo dnf clean all
```

---

## 4. Logical Workflow: Managing Your 200GB

To run Windows, macOS, and Linux simultaneously on your remaining space:

1.  **The Foundation:** Your Fedora 43 Base file will sit at **~10GB**.
2.  **The Experiment:** Every time you want to test a new AI agent, create a **Linked Clone**.
3.  **The Storage Math:** \* 1x Fedora Base (**10GB**)
    - 5x Linked Clones (**~2GB total** initial)
    - **Remaining Space:** **~188GB** (Plenty for Windows 11 and macOS installs).

---

**Would you like the specific `qemu-img` command to create your first Linked Clone from this Fedora 43 base?**

Great news: **No, it won’t break, and you definitely won't need a fresh install.**

Fedora has one of the most reliable "In-Place Upgrade" systems in the Linux world (`dnf system-upgrade`). However, because you are using the **Base Image Strategy**, there is a specific "Pro" way to handle this to keep your 512GB SSD organized.

---

### 1. How the Upgrade Works (The Fedora Way)

When Fedora 44 goes stable in April, you simply run these three commands inside your **Base VM**:

```bash
sudo dnf install dnf-plugin-system-upgrade
sudo dnf system-upgrade download --releasever=44
sudo dnf system-upgrade reboot
```

The VM reboots, upgrades the packages, and you are on Fedora 44. **All your files, AI models, and dev tools stay exactly where they were.**

---

### 2. The "Base Image" Trap (Important!)

Remember our "Golden Rule": **If you change the Base, the Clones break.**

- **The Problem:** If you upgrade your Fedora 43 Base to Fedora 44, any existing "Linked Clones" pointing to it will likely experience **filesystem corruption** and fail to boot.
- **The Solution:** You don't "upgrade" the old base; you **evolve** it.

---

### 3. The "April Migration" Strategy (Safe & Clean)

When April arrives, follow this logical flow to keep your 200GB free space optimized:

1.  **Keep the Fedora 43 Base:** Do not touch it while you have active projects running on Fedora 43 clones.
2.  **Create Fedora 44 Base:** \* **Option A:** Create a fresh VM from the Fedora 44 ISO (Fastest/Cleanest).
    - **Option B:** Clone your Fedora 43 Base to a _new_ file, and upgrade _that_ file to 44.
3.  **Migration:** Start making all _new_ clones from the Fedora 44 Base.
4.  **Cleanup:** Once your old Fedora 43 projects are finished, delete the Fedora 43 clones and the Fedora 43 Base file.

**This recovers ~10GB of SSD space instantly.**

---

### 4. Summary: Will it break?

| Component           | Will it break? | How to handle it                                                 |
| :------------------ | :------------- | :--------------------------------------------------------------- |
| **The OS itself**   | **No.**        | Fedora handles the 43 → 44 jump very smoothly.                   |
| **Your Data/Code**  | **No.**        | Especially if it's on your **Shared Data Hub/VirtioFS**.         |
| **Existing Clones** | **YES.**       | **Do not upgrade a Base** that has active Clones attached to it. |
