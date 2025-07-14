# Linux: File, Directory and Storage operations

- `lsblk -l` : Mounted drives
- `sudo udisksctl power-off -b /dev/sda` : Turn off external HDD power
- `nautilus admin:/`: Run Nautilus File Manager with root privileges (use `sudo -i` and `CTRL+D` to return to normal user)
- `pwd` : Print working directory command in Linux
- `cd` : Linux command to navigate through directories
- `mkdir` : Command used to create directories in Linux
- `sudo systemctl hibernate` : Hibernate the computer (Enable Hibernate on Ubuntu)
- `mv` : Move or rename files in Linux
- `cp` : Copy files in Linux
- `rm` : Delete files or directories
- `touch` : Create blank/empty files or update file timestamps
- `ln` : Create symbolic links (shortcuts) to other files
- `cat` : Display file contents on the terminal (supports multiple files)
- `tar` : Extract and compress files in Linux
- `head` : Return the specified number of lines from the top of a file
- `tail` : Return the specified number of lines from the bottom of a file
- `diff` : Find the difference between two files
- `cmp` : Check if two files are identical
- `comm` : Combines functionality of diff and cmp
- `sort` : Sort the content of a file while outputting
- `zip` : Zip files in Linux
- `unzip` : Unzip files in Linux
- `ls` : Display a list of files in the current directory  
- `stat` : Display when a file was last accessed, modified, or changed  
- `rmdir` : Delete an empty directory (must be empty to succeed)  
- `rename` : Change the name of a file or set of files  
- `find` : Search for files based on criteria  
- `locate` : Search for files or directories (faster than `find`)  
- `grep` : Search files for a text string  
- `mount` : Attach a separate filesystem (e.g., external drive) to main filesystem  
- `umount` : Detach a separate filesystem  
- `chmod` : Change file permissions  
- `chown` : Change the owner or group of a file  
- `cd ~` : Change to your home directory (usually `/home/`)  
- `chmod [who][+,-,=][permissions] [name]` : Change permissions for a file  
- `chmod 777 [name]` : Allow all users to read, write, and execute the file  
- `chmod u+x [name]` : Allow the user to execute the file  
- `cp [from] [to]` : Copy a file from source to destination  
- `cp -r [from] [to]` : Copy all files and subdirectories recursively  
- `grep ‘string’ [name]` : Search inside one or more files for occurrences of ‘string’  
- `head [name]` : Return the first lines of a file  
- `ls -a` : List all files including hidden files  
- `ls -l` : List contents with detailed information  
- `ls [path]` : List the contents of a directory at the specified path  
- `mkdir [name]` : Create a directory in the current working directory  
- `mv [from] [to]` : Move a file from source to destination  
- `mv -r [from] [to]` : Move all files and directories recursively  
- `rm [name]` : Remove a specified file  
- `rm *` : Remove all files in the current directory  
- `rm -r *` : Remove all files and directories recursively  
- `rmdir [name]` : Remove an empty directory  
- `tail [name]` : Show the end lines of a file  
- `tar -cvzf [name] [path]` : Create a compressed file from the contents of a path  
- `tar -xvzf [name]` : Extract the contents of a compressed file  

## Fixing the Encrypted drive issues on boot initramfs

Rarely when you boot Ubuntu will not mount the encrypted drive due to an unknown reason i.e. /etc/crypttab has been changed. Then cryptsetup luksOpen /dev/nvme0n1p3 DecryptedDrive Enter the correct password and then exit the console exit \*nvme0n1p3 is assumed as the default name for the SSD, change as per the correct device
Once Ubuntu boots up normally (after the encrypted drive is mounted according to the above) Edit the /etc/crypttab by sudo nano /etc/crypttab
Also open up Ubuntu Disks manager and look for the LUKS encrypted drive UUID then add to the DecryptedDrive UUID=XXXXX none nofail Then update initramfs as follows `sudo update-initramfs -u -k all`
