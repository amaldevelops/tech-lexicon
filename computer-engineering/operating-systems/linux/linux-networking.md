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