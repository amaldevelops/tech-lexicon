# KVM+Virt-Manager setup

Straightforward guide to set up KVM and Virt-Manager on Ubuntu:

## 1. **Install KVM, Virt-Manager, and Supporting Packages**

Open your terminal and run:

```bash
sudo apt update
sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virt-manager
```

### 2. **Add Yourself to libvirt and kvm Groups**

This allows your user to manage and run virtual machines:

```bash
sudo usermod -aG libvirt $USER
sudo usermod -aG kvm $USER
```

After running these commands, log out and log back in (or reboot) to apply group changes[^1][^4][^3].

### 3. **Verify Installation**

Check if KVM is working:

```bash
sudo systemctl status libvirtd
```

If it isn’t active, start it with:

```bash
sudo systemctl enable --now libvirtd
```

To confirm virtualization support:

```bash
lsmod | grep kvm
```

List all available VMs (should be empty initially):

```bash
sudo virsh list --all
```

### 4. **Launch Virt-Manager**

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
5. Complete the setup and boot your new VM[^1][^3][^4][^5].

**Tips:**

- You can manage multiple VMs and adjust their resources through Virt-Manager.
- Advanced networking or hardware passthrough are supported with further configuration.

This setup gives you a robust, fast, and flexible virtualization environment on your Ubuntu desktop.


[^1]: https://diegocarrasco.com/how-to-use-virt-manager-linux-mint-ubuntu/

[^2]: https://www.bdrsuite.com/blog/how-to-install-virt-manager-and-create-a-new-kvm-virtual-machine/

[^3]: https://phoenixnap.com/kb/ubuntu-install-kvm

[^4]: https://www.cherryservers.com/blog/install-kvm-ubuntu

[^5]: https://documentation.ubuntu.com/server/how-to/virtualisation/virtual-machine-manager/

[^6]: https://linuxconfig.org/setting-up-virtual-machines-with-qemu-kvm-and-virt-manager-on-debian-ubuntu

[^7]: https://ubuntu.com/blog/kvm-hyphervisor

[^8]: https://www.youtube.com/watch?v=rXNjOrFiNtA

