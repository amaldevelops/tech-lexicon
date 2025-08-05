# Administration

- `su` : Switch user (defaults to root unless specified)

- `passwd` : Create or update a user's password
- `sudo` : Command to escalate privileges in Linux
- `sudo [command]` : Execute `[command]` with elevated privileges
- `sudo su` : Switch to root user shell (be careful!)
- `sudo apt get install [package]` : Install a package
- `sudo apt get update` : Update the list of packages
- `sudo apt get upgrade` : Upgrade installed packages (run after update)
- `sudo apt remove [package]` / `sudo apt purge [package]` : Remove packages (purge removes config files too)
- `sudo reboot` : Restart the system immediately
- `sudo shutdown -h now` : Shutdown the system immediately
- `sudo chown pi:root [name]` : Change owner and group of a file to user `pi` and group `root`
- `sudo raspi-config` : Launch Raspberry Pi configuration menu
- `sudo killall nautilus` : Kill frozen Nautilus file manager
- `sudo killall openvpn` : Close OpenVPN processes
- `sudo apt update && sudo apt upgrade` : Refresh and update software in Debian/Ubuntu in one command
- `sudo apt install ./deb_file` : Manually install Deb files from current directory
- `snap refresh` : Update Snap packages
- `service` : Start and stop services
- `kill [pid]` / `kill -9 [pid]` : Terminate a process (`-9` forces termination)
- `killall [name]` : Terminate all processes matching a name
- `mount` : Mount file systems
- `chmod` : Change file permissions
- `chown` : Change owner or group of a file or folder
- `export` : Export environment variables
- `apt` / `pacman` / `yum` / `rpm` / `dnf` : Package managers depending on distro
- `alias` : Create custom shortcuts for commands
- `dd` : Create bootable USB sticks or copy low-level data
- `useradd` / `usermod` : Add or modify users
- `crontab -l` / `crontab -e` : List or edit scheduled cron jobs
- `screen -s [name]` / `screen -r [name or ID]` : Start or resume detached terminal sessions
- `watch` : Run a command periodically to monitor output
- `/usr/bin/dm-tool lock` : Lock the screen
- `bg` : Resume a stopped job in the background
- `fg` : Bring a job to the foreground
- `whereis [command]` : Locate executable file of a command
- Restart the desktop portal to free memory bug in Ubuntu:  
  `systemctl restart --user xdg-desktop-portal-gnome.service`
- Force update Google Chrome (after downloading deb file):  
  `sudo apt update && sudo apt upgrade && sudo apt install ./google-chrome-stable_current_amd64.deb`
