# Linux Networking

## Connecting remote computer using sftp

- Start the SSH service and set it to run automatically whenever the machine/VM boots : `sudo systemctl enable --now sshd`
- Verify : `sudo systemctl status sshd`
- If blocked by machines fire wall 
```
sudo firewall-cmd --add-service=ssh --permanent
sudo firewall-cmd --reload
```
- Connect using Ubuntu Nautilus File manager, with this method you can browse, copy files and folder between local machine and remote machine easily Format : `sftp://<REMOTE_USER_NAME>@<GUEST_IP_ADDRESS>` i.e: `sftp://ak@192.168.122.6` 
- Connect using Terminal : `sftp ak@192.168.122.6`

## Connecting remote computer using ssh

- If you have the Public IP address (or a domain name) of the remote computer, a valid username on that machine, and its password, open your terminal and run:`ssh username@remote_ip_address`
- The first time you connect, your terminal will ask if you trust the host fingerprint. Type yes, hit enter, type the remote password, and your terminal prompt will change to the remote computer.
- Connecting via a Custom Port, By default, SSH uses port 22. However, for security reasons, many system administrators change the default SSH port on remote servers to block automated hacker bots. If your remote server uses a custom port (e.g., 2222), use the -p flag: `ssh -p 2222 username@remote_ip_address`

### Ditch Passwords: Setup SSH Keys (Highly Recommended)
- Typing passwords gets old quickly, and it is less secure. You can generate a pair of cryptographic keys (a public one and a private one) so you can log in instantly without a password.
Step A: Generate your keys on your local machine
On your local Ubuntu machine, run: `ssh-keygen -t ed25519` (Press Enter through all the prompts to save it to the default location with no passphrase).
- Step B: Copy your public key to the remote computer
Linux has a brilliant built-in shortcut command that installs your key automatically onto the remote machine: `ssh-copy-id username@remote_ip_address` From now on, whenever you type ssh username@remote_ip_address, it will log you in instantly without ever asking for a password!
- The SSH Config File (The Lazy Pro Move)
If you connect to a remote server frequently, typing ssh -p 2222 maverick@93.184.216.34 every time is tedious. You can create a nickname shortcut instead.
On your local machine, open or create your SSH config file: `nano ~/.ssh/config`
- Add a block that looks like this:
```
Host my-remote-server
    HostName 93.184.216.34
    User maverick
    Port 2222
```
Now, to connect to that remote server, all you have to type is: `ssh my-remote-server`

### Running a GUI App Remotely (-X or -Y)
Did you know you can run a graphical interface program on the remote machine and have the window pop up right on your local Ubuntu desktop? This is called X11 Forwarding.

Connect using the -X flag: `ssh -X username@remote_ip_address`
- Once logged in, try running a graphical application from the terminal:`nautilus . &` The remote machine will handle all the computing power, but the visual folder window will seamlessly render right on your local laptop screen!