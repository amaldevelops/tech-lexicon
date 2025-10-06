# KVM+Virt-Manager setup

# QEMU/KVM how to setup on ubuntu

To set up QEMU/KVM on Ubuntu, follow these recommended steps to ensure full virtualization support and effective management of your virtual machines:

### 1. Verify Virtualization Support

- Check if your CPU supports virtualization (Intel VT-x or AMD-V) by running:
  - `egrep -c '(vmx|svm)' /proc/cpuinfo`
  - Any number greater than 0 means your CPU supports virtualization.
- Ensure KVM is supported:
  - Install CPU checker: `sudo apt install cpu-checker`
  - Run: `kvm-ok`
  - The output should confirm KVM acceleration availability.

### 2. Install QEMU/KVM and Related Packages

- Update your Ubuntu packages:
  - `sudo apt update && sudo apt upgrade -y`
- Install virtualization tools:
  - `sudo apt install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virt-manager virtinst`
  - Package roles:
    - `qemu-kvm`: Emulator and KVM support
    - `libvirt-daemon-system` and `libvirt-clients`: VM management
    - `bridge-utils`: Networking for VMs
    - `virt-manager`: GUI for VM creation and management (optional).

### 3. Authorize Users

- Add your user to both `libvirt` and `kvm` groups:
  - `sudo usermod -aG libvirt $USER`
  - `sudo usermod -aG kvm $USER`
- You can apply group changes with:
  - `newgrp libvirt`
  - `newgrp kvm`

### 4. Enable and Verify Services

- Start and enable the virtualization daemon:
  - `sudo systemctl enable --now libvirtd`
  - Check status: `sudo systemctl status libvirtd`
- Confirm KVM modules are loaded:
  - `lsmod | grep kvm`
  - You should see output like ‘kvm’ and ‘kvm_intel’ (or ‘kvm_amd’).

### 5. Create Your First Virtual Machine

- Start the GUI with: `virt-manager`
- Use the wizard to select "Local install media (ISO)", choose your ISO file, configure CPUs, memory, and storage, then launch the VM.

This process ensures a modern, fast, and secure virtualization environment for development and experimentation on Ubuntu.

### 6. **Launch Virt-Manager**

Open your applications menu and search for “Virtual Machine Manager,” or launch from terminal:

```bash
virt-manager
```

You now have a graphical interface to create and manage VMs!

### 5. **Create Your First Virtual Machine**

1. Download an ISO of your preferred operating system (e.g., Ubuntu, Windows).
2. In Virt-Manager, click **Create a new virtual machine**.
3. Choose **Local install media (ISO image)**, browse to your ISO file, and follow the wizard.
4. Allocate CPU, RAM, and disk space as needed.
5. Complete the setup and boot your new VM

**Tips:**

- You can manage multiple VMs and adjust their resources through Virt-Manager.
- Advanced networking or hardware passthrough are supported with further configuration.

This setup gives you a robust, fast, and flexible virtualization environment on your Ubuntu desktop.
