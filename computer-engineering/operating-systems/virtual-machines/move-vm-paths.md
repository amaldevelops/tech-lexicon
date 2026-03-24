This is the complete, integrated "Master Reference" for moving and migrating QEMU/KVM virtual machines. You can copy and save this as a markdown file (`.md`) or a text document.

---

# QEMU/KVM Migration & Permission Master Guide

Use this guide when moving VM disk images (`.qcow2`) to a new drive or migrating a complete VM to a new physical computer.

---

## Part 1: Moving Disks to a New Location (Same PC)

If you move a `.qcow2` file to a secondary drive (e.g., `/media/SSD`), you must "open the doors" for the QEMU service.

### 1. The "Path of Execution" (Open the Doors)

QEMU needs "Search" permissions (`+x`) for **every** folder in the chain.

```bash
# Example for: /media/maverick/work/work-ssd/virtual-machines/vm/
sudo chmod +x /media/maverick
sudo chmod +x /media/maverick/work
sudo chmod +x /media/maverick/work/work-ssd
sudo chmod +x /media/maverick/work/work-ssd/virtual-machines
sudo chmod +x /media/maverick/work/work-ssd/virtual-machines/vm
```

_Note: This is safe for single-user home desktops. It allows the system to "pass through" but not "list" your files._

### 2. Set Ownership & Permissions

The disk image must be owned by the specific Libvirt/QEMU system user.

```bash
# 1. Identify the UID:GID (Check the error message in virt-manager)
# 2. Apply Ownership (Example UID 64055, GID 993)
sudo chown 64055:993 /path/to/your/vm/debian13.qcow2

# 3. Set Read/Write permissions
sudo chmod 660 /path/to/your/vm/debian13.qcow2
```

### 3. Update virt-manager

1. Open **virt-manager** → **VM Settings (i)** → **VirtIO Disk**.
2. Update **Source path** to the new location and click **Apply**.

---

## Part 2: Migration to a New PC (Full Backup)

To move a VM to a different machine, you need the "Trinity" of files.

### 1. The Backup Checklist

- How to see your exact VM names : If you aren't sure of the exact name Libvirt uses, run: `virsh list --all`

| Component      | What it is    | How to get it / Where it is                            |
| :------------- | :------------ | :----------------------------------------------------- |
| **The Body**   | Storage Image | Your `.qcow2` file.                                    |
| **The Brain**  | XML Config    | `virsh dumpxml [vm_name] > [vm_name].xml`              |
| **The Memory** | NVRAM/Vars    | `/var/lib/libvirt/nvram/[vm_name].vars` (For UEFI VMs) |

### 2. Setting up on the New Machine

1. **Find the local UID:** IDs change between computers. Find yours with:
   `grep -E "qemu|libvirt-qemu" /etc/passwd`
2. **Place Files:** Move your `.qcow2` and `.vars` files to their new home.
3. **Register the VM:** `virsh define [vm_name].xml`
4. **Update Paths:** If the folder path changed (e.g., different username), run:
   `virsh edit [vm_name]`
   _Search for `<source file='...'/>` and `<nvram template='...'/>` and fix the paths._
5. **Re-apply Permissions:** Repeat the **Phase 1** `chmod` and `chown` steps using the new machine's UID.

---

## Part 3: Pro-Tips & Security

### Troubleshooting "No such file or directory"

If `chmod` or `ls` fails even with `sudo`, a parent folder is likely blocking you. Verify the exact path with:
`find /media/maverick -name "*.qcow2"`

### The "Security Best Practice" (ACLs)

Instead of `chmod +x`, you can use Access Control Lists to grant access **only** to the VM user:

```bash
sudo setfacl -m u:libvirt-qemu:x /media/maverick
```

### The /media Trap

The `/media/[user]` folder is managed by the OS and often resets to `700` (Private) after updates or reboots. If your VM suddenly won't start, re-run `sudo chmod +x /media/[user]`.

---

**Final Step:** Would you like me to help you generate a **bash script** that automatically detects your local QEMU UID and applies all these permissions to a specific folder for you?
