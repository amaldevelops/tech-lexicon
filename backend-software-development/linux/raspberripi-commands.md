heck if xterm package exists.
Run

dpkg -l | grep xterm

and see if you get any output.

If xterm package does not exist , install it

sudo apt install xterm

you can manually set lxterminal as x-terminal-emulator by running the following command
sudo update-alternatives --config x-terminal-emulator


sudo killall openvpn
