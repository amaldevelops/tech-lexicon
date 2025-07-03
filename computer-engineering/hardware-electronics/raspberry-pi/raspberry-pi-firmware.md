#Update Rapberri Pi Firmware

Overall, updating your Pi 4’s OS is simple and straightforward. An overview of the steps are as follows:
    1. Ensure you’re connected to a stable internet connection.
    2. Check what version of firmware your Pi 4 is running to see if you need to update it. You can do this by opening a new terminal window and entering the command sudo rpi-eeprom-update.
    3. If an update is required, install the latest software for the Raspberry Pi 4 by first running the command sudo apt upgrade, and after that has completed, run sudo apt full-upgrade.
    4. Next, update and install the latest firmware by entering in the command sudo apt install rpi-eeprom.
    5. Once the installation process has finished, reboot the Pi by entering in sudo reboot.
Updating the EEPROM Configuration
The boot behaviour (e.g. SD or USB boot) is controlled by a configuration file embedded in the EEPROM image and can be modified via the rpi-eeprom-config tool.
Please see the Bootloader Configuration sections for details of the configuration.
Reading the current EEPROM configuration
To view the configuration used by the current bootloader during the last boot run rpi-eeprom-config or vcgencmd bootloader_config.
Reading the configuration from an EEPROM image
To read the configuration from an EEPROM image:
rpi-eeprom-config pieeprom.bin
Editing the current bootloader configuration
The following command loads the current EEPROM configuration into a text editor. When the editor is closed, rpi-eeprom-config applies the updated configuration to latest available EEPROM release and uses rpi-eeprom-update to schedule an update when the system is rebooted:
sudo -E rpi-eeprom-config --edit
sudo reboot
If the updated configuration is identical or empty then no changes are made.
The editor is selected by the EDITOR environment variable.
Applying a saved configuration
The following command applies boot.conf to the latest available EEPROM image and uses rpi-eeprom-update to schedule an update when the system is rebooted.
sudo rpi-eeprom-config --apply boot.conf
sudo reboot
Automatic Updates
The rpi-eeprom-update systemd service runs at startup and applies an update if a new image is available, automatically migrating the current bootloader configuration.
To disable automatic updates:
sudo systemctl mask rpi-eeprom-update
To re-enable automatic updates:
sudo systemctl unmask rpi-eeprom-update
Note
If the FREEZE_VERSION bootloader EEPROM config is set then the EEPROM update service will skip any automatic updates. This removes the need to individually disable the EEPROM update service if there are multiple operating systems installed or when swapping SD-cards. 
rpi-eeprom-update 
Raspberry Pi OS uses the rpi-eeprom-update script to implement an automatic update service. The script can also be run interactively or wrapped to create a custom bootloader update service.
Reading the current EEPROM version:
vcgencmd bootloader_version
Check if an update is available:
sudo rpi-eeprom-update
Install the update:
sudo rpi-eeprom-update -a
sudo reboot
Cancel the pending update:
sudo rpi-eeprom-update -r
Installing a specific bootloader EEPROM image:
sudo rpi-eeprom-update -d -f pieeprom.bin
The -d flag instructs rpi-eeprom-update to use the configuration in the specified image file instead of automatically migrating the current configuration.
Display the built-in documentation:
rpi-eeprom-update -h
Bootloader Release Status
The firmware release status corresponds to a particular subdirectory of bootloader firmware images (/lib/firmware/raspberrypi/bootloader/...), and can be changed to select a different release stream.
    • default - Updated for new hardware support, critical bug fixes and periodic update for new features that have been tested via the latest release.
    • latest - Updated when new features have been successfully beta tested.
    • beta - New or experimental features are tested here first.
Since the release status string is just a subdirectory name, then it is possible to create your own release streams e.g. a pinned release or custom network boot configuration.
N.B. default and latest are symbolic links to the older release names of critical and stable.
Changing the bootloader release
Note
You can change which release stream is to be used during an update by editing the /etc/default/rpi-eeprom-update file and changing the FIRMWARE_RELEASE_STATUS entry to the appropriate stream. 
Updating the bootloader configuration in an EEPROM image file
The following command replaces the bootloader configuration in pieeprom.bin with boot.conf and writes the new image to new.bin:
rpi-eeprom-config --config boot.conf --out new.bin pieeprom.bin
recovery.bin
At power on, the BCM2711 ROM looks for a file called recovery.bin in the root directory of the boot partition on the SD card. If a valid recovery.bin is found then the ROM executes this instead of the contents of the EEPROM. This mechanism ensures that the bootloader EEPROM can always be reset to a valid image with factory default settings.
See also Raspberry Pi 4 boot-flow
EEPROM update files
Filename
Purpose
recovery.bin
bootloader EEPROM recovery executable
pieeprom.upd
Bootloader EEPROM image
pieeprom.bin
Bootloader EEPROM image - same as pieeprom.upd but changes recovery.bin behaviour
pieeprom.sig
The sha256 checksum of bootloader image (pieeprom.upd/pieeprom.bin)
vl805.bin
The VLI805 USB firmware EEPROM image - ignored on 1.4 and later board revisions which do not have a dedicated VLI EEPROM
vl805.sig
The sha256 checksum of vl805.bin
    • If the bootloader update image is called pieeprom.upd then recovery.bin is renamed to recovery.000 once the update has completed, then the system is rebooted. Since recovery.bin is no longer present the ROM loads the newly updated bootloader from EEPROM and the OS is booted as normal.
    • If the bootloader update image is called pieeprom.bin then recovery.bin will stop after the update has completed. On success the HDMI output will be green and the green activity LED is flashed rapidly. If the update fails, the HDMI output will be red and an error code will be displayed via the activity LED.
    • The .sig files contain the hexadecimal sha256 checksum of the corresponding image file; additional fields may be added in the future.
    • The BCM2711 ROM does not support loading recovery.bin from USB mass storage or TFTP. Instead, newer versions of the bootloader support a self-update mechanism where the bootloader is able to reflash the EEPROM itself. See ENABLE_SELF_UPDATE on the bootloader configuration page.
    • The temporary EEPROM update files are automatically deleted by the rpi-eeprom-update service at startup.
For more information about the rpi-eeprom-update configuration file see rpi-eeprom-update -h.
EEPROM write protect
Both the bootloader and VLI EEPROMs support hardware write protection. See the eeprom_write_protect option for more information about how to enable this when flashing the EEPROMs.