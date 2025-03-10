# Linux Commands

- Restart the desktop portal to free up memory due to bug in Ubuntu :
`systemctl restart --user xdg-desktop-portal-gnome.service`

- Force Update Google chrome that cannot be upgraded automatically
Fist download the deb file and run this command on the deb file then run this command : 
`sudo apt update && sudo apt upgrade && sudo apt install ./google-chrome-stable_current_amd64.deb`