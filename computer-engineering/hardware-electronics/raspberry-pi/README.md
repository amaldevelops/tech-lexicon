# RaspberryPi

- [Official Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/)
- [Raspberry Pi hardware information](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)
- [Raspberry Pi OS documentation](https://www.raspberrypi.com/documentation/computers/os.html)
- Check if xterm package exists : `dpkg -l | grep xterm` and see if you get any output. If xterm package does not exist , install it
  `sudo apt install xterm`
- You can manually set lxterminal as x-terminal-emulator by running the following command
  `sudo update-alternatives --config x-terminal-emulator`
- `sudo killall openvpn`
- `argonone-config` : Argoneone Case fan control configuration curl https://download.argon40.com/argon1.sh | bash : Install ArgonOne fancontrol script
- `pinout` : A handy reference can be accessed on the Raspberry Pi by opening a terminal window and running the command pinout
- `sudo usermod -a -G gpio [username]` : In order to use the GPIO ports your user must be a member of the gpio group. The pi user is a member by default, other users need to be added manually.
- `sudo rpi-update` and then use `sudo reboot`
- `rpi-update` : will download the latest pre-release version of the linux kernel, its matching modules, device tree files, along with the latest versions of the VideoCore firmware. It will then install these files to relevant locations on the SD card, overwriting any previous versions.
- `sudo apt-get update sudo apt install --reinstall libraspberrypi0 libraspberrypi-{bin,dev,doc} raspberrypi-bootloader raspberrypi-kernel` If you have done an rpi-update and things are not working as you wish, if your Raspberry Pi is still bootable you can return to the stable release using above command
- `sudo raspi-config` : Configure Raspberry Pi
- `sudo rpi-update` : Only use this if you know what you do. This command will update everything on your Raspberry Pi (firmware, packages, …) and can potentially break something.
- `vcgencmd measure_temp` : Displays the current CPU temperature.
- `raspi-gpio` : This command allows you to manage the GPIO pins of the Raspberry Pi. You can either set or get a value. `raspi-gpio get 20` or `raspi-gpio set 20 a5` `raspi-gpio set 20 op pn dh`
