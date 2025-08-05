# Linux Reference

- [How Linux work](./how-linux-work.md)
- [KVM+Virt-Manager setup](./kvm-virt-manager-setup.md)
- [Linux : General commands](./linux-general-commands.md)
- [Linux : File, Directory and Storage operations](linux-file-operation.md)
  - [File system types](./file-system-types.md)
- [Linux : Admin](linux-admin.md)
- [Linux : Networking](linux-networking.md)
- [Linux : Commands Firmware](linux-commands-firmware.md)
- [Raspberry Pi commands](raspberry-pi-commands.md)
- [The Unix Shell](https://swcarpentry.github.io/shell-novice/)
- [Raspberry Pi](/computer-engineering/hardware-electronics/raspberry-pi)
- [Ubuntu creating desktop link](./ubuntu-create-desktop-link.md)

## Frequently used commands

- Restart the desktop portal to free memory bug in Ubuntu:  
  `systemctl restart --user xdg-desktop-portal-gnome.service`
- Force update Google Chrome (after downloading deb file):  
  `sudo apt update && sudo apt upgrade && sudo apt install ./google-chrome-stable_current_amd64.deb`
- `kill [pid]` / `kill -9 [pid]` : Terminate a process (`-9` forces termination)
- `killall [name]` : Terminate all processes matching a name