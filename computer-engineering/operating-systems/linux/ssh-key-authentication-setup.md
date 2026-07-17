
---

# Set Up SSH Key Authentication Between Two Ubuntu Machines

SSH key authentication is a one-time setup that allows you to connect to a remote Ubuntu machine without entering your password every time. Once configured, SSH clients such as the terminal and VS Code automatically authenticate using your SSH key.

## Quick Setup

### Step 1: Generate an SSH Key Pair (Host Machine)

On your local Ubuntu machine, generate a new Ed25519 key pair:

```bash
ssh-keygen -t ed25519 -C "my-ubuntu-server-key"
```

When prompted:

* Specify a custom filename to avoid overwriting your default SSH key. For example:

```text
/home/your_username/.ssh/id_ed25519_ubuntu_server
```

* Enter a passphrase for additional security, or press **Enter** twice to leave it blank.

---

### Step 2: Copy the Public Key to the Server

Transfer your public key to the remote Ubuntu server:

```bash
ssh-copy-id username@remote_server_ip
```

When prompted:

* Enter the **remote user's password** one final time.
* Your public key is automatically added to the server's `~/.ssh/authorized_keys` file.
* The required SSH file permissions are configured automatically.

---

### Step 3: Test the Connection

Verify that passwordless authentication is working:

```bash
ssh username@remote_server_ip
```

If everything is configured correctly, you'll log in without being asked for your account password (unless your private key is protected by a passphrase).

---

### Step 4: Connect Using VS Code

1. Open **VS Code**.
2. Click the **Remote Window** icon (`><`) in the bottom-left corner.
3. Select **Connect to Host...**
4. Choose your configured server.

VS Code will use your SSH key automatically, eliminating the password prompt.

---

# How SSH Key Authentication Works

The setup only takes a few commands, but several things happen behind the scenes to make passwordless authentication possible.

## Step 1: Generating the Key Pair

When you run:

```bash
ssh-keygen -t ed25519
```

your local machine creates two cryptographically linked keys.

### What happens behind the scenes

1. **A key pair is generated**

   SSH creates two mathematically related keys:

   * **Private key (`id_ed25519`)** – stays on your local machine and should never be shared.
   * **Public key (`id_ed25519.pub`)** – can be safely copied to any server you want to access.

2. **The keys are stored**

   By default, both files are saved in:

```text
~/.ssh/
```

3. **Permissions are secured**

   Your private key is automatically given restrictive permissions (typically `chmod 600`) so other users on the machine cannot read it.

4. **Optional passphrase protection**

   If you choose a passphrase, your private key is encrypted on disk, providing additional protection if someone gains access to your computer.

---

## Step 2: Installing the Public Key on the Server

When you run:

```bash
ssh-copy-id username@remote_server_ip
```

your public key is copied to the remote machine.

### What happens behind the scenes

1. **Initial authentication**

   Your computer connects using standard SSH, so the server requests your account password one last time.

2. **The `.ssh` directory is created (if needed)**

   The server checks for the user's `~/.ssh` directory and creates it if it doesn't already exist.

3. **The public key is installed**

   The contents of your local `id_ed25519.pub` file are appended to:

```text
~/.ssh/authorized_keys
```

This file contains every public key that is allowed to authenticate as that user.

4. **Permissions are configured**

   SSH requires strict permissions, so `ssh-copy-id` ensures:

* `~/.ssh` → `700`
* `authorized_keys` → `600`

If these permissions are too permissive, the SSH server ignores the keys for security reasons.

---

## Step 3: Authenticating with Your SSH Key

Once your public key has been installed, passwordless authentication is ready to use.

When you connect:

```bash
ssh username@remote_server_ip
```

the following occurs:

1. Your SSH client locates your private key.
2. The server checks whether it has the matching public key in `authorized_keys`.
3. The server sends a cryptographic challenge.
4. Your private key signs the challenge.
5. The server verifies the signature using the stored public key.
6. If the verification succeeds, you're logged in immediately.

At no point is your private key transmitted over the network—it always remains on your local machine.

---

## Summary

The setup process is simple:

1. Generate a public/private key pair on your local machine.
2. Copy the public key to the remote server.
3. Connect normally using SSH or VS Code.

After this one-time configuration, authentication is handled through public-key cryptography, providing a faster, more secure alternative to password-based logins.
