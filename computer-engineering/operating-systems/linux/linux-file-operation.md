# Linux: File, Directory and Storage operations

- `nautilus admin:/`: Run Nautilus File Manager with Root privileges: prompt with root permissions with the command: sudo -i and CTRL+D to go back to normal user
- `pwd` : Print working directory command in Linux
- `cd` : Linux command to navigate through directories
- `mkdir` : Command used to create directories in Linux
- `sudo systemctl hibernate` : Hibernate The computer Enable Hibernate on Ubuntu Tutorial
- `mv` : Move or rename files in Linux
- `cp` : Similar usage as mv but for copying files in Linux
- `rm` : Delete files or directories
- `touch` : Create blank/empty files
- `ln` : Create symbolic links (shortcuts) to other files
- `cat` : Display file contents on the terminal
- `tar` : Command to extract and compress files in Linux
- `head` : Return the specified number of lines from the top
- `tail` : Return the specified number of lines from the bottom
- `diff` : Find the difference between two files
- `cmp` : Allows you to check if two files are identical
- `comm` : Combines the functionality of diff and cmp
- `sort` : Linux command to sort the content of a file while outputting
- `zip`: Zip files in Linux
- `unzip` : Unzip files in Linux
- Fixing the Encrypted drive issues on boot initramfs:
  Rarely when you boot Ubuntu will not mount the encrypted drive due to an unknown reason i.e. /etc/crypttab has been changed. Then cryptsetup luksOpen /dev/nvme0n1p3 DecryptedDrive Enter the correct password and then exit the console exit \*nvme0n1p3 is assumed as the default name for the SSD, change as per the correct device
  Once Ubuntu boots up normally (after the encrypted drive is mounted according to the above) Edit the /etc/crypttab by sudo nano /etc/crypttab
  Also open up Ubuntu Disks manager and look for the LUKS encrypted drive UUID then add to the DecryptedDrive UUID=XXXXX none nofail Then update initramfs as follows `sudo update-initramfs -u -k all`
