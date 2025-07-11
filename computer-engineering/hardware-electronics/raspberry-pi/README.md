# RaspberryPi

## Index

- [Raspberry Pi basics](./raspberrypi-basics.md)
- [General Linux commands](/computer-engineering/operating-systems/linux/README.md)
- [Raspberry Pi : Firmware](./raspberry-pi-firmware.md)
- [Raspberry Pi : Hardware](./raspberry-pi-hardware.md)

## Commands

- [Official Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/)
- [Raspberry Pi hardware information](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)
- [Raspberry Pi OS documentation](https://www.raspberrypi.com/documentation/computers/os.html)
- Check if xterm package exists : `dpkg -l | grep xterm` and see if you get any output. If xterm package does not exist , install it
  `sudo apt install xterm`
- You can manually set lxterminal as x-terminal-emulator by running the following command
  `sudo update-alternatives --config x-terminal-emulator`
- `sudo killall openvpn`

## Creating a Virtual Desktop

If your Raspberry Pi is headless (i.e., not plugged into a monitor) or controlling a robot, it is unlikely to be running a graphical desktop.

**VNC Server** can create a virtual desktop for you, giving you graphical remote access on demand. This virtual desktop exists only in your Raspberry Pi’s memory.

### To create and connect to a virtual desktop:

- On your Raspberry Pi (using Terminal or via SSH), run:

  - `vncserver`
  - Make note of the IP address/display number that VNC Server prints (e.g. `192.167.5.149:1`)

- On the device you’ll use to take control, enter this IP and display number into **VNC Viewer**.

### To destroy a virtual desktop:

- Run the following command:
  - `vncserver -kill :<display-number>`

This will stop the virtual desktop and disconnect any existing sessions.

## Install Docker

### Update and Upgrade System

```bash
sudo apt-get update && sudo apt-get upgrade

curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker pi

sudo docker version
sudo docker info

docker run hello-world

sudo docker pull cambarts/webgoat-8.0-rpi
sudo docker run -p 8080:8080 -t cambarts/webgoat-8.0-rpi

http://192.168.20.16:8080/WebGoat

Username: webgoatpi
Password: Kali2021
```
