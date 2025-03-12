# Linux Commands to Check the State of Firmware

https://eclypsium.com/blog/linux-commands-to-check-the-state-of-firmware/ 

- Use the following command to learn a little more information about the BIOS:
`sudo dmidecode -t 0`
- lshw is yet another alternative:
`sudo lshw | grep -A8 '*-firmware'`
- To report the state of Secure Boot the mokutil command is the most straightforward: `mokutil --sb-state`
- Discover the current BIOS version and release date using dmidecode:
`sudo dmidecode -s bios-version`
`sudo dmidecode -s bios-release-date`

## FWUPD

- Fwupd allows you to enumerate the devices on your system and apply updates where available. You can find more documentation on the project’s website. Here are the basics:
Get all device information: `fwupdmgr get-devices`
- Get updates (downloads the latest metadata and checks for updates on supported devices): `fwupdmgr get-updates`
- Apply updates to supported devices (CAUTION: Applies firmware updates!): `fwupdmgr update`
Note: Will also update the UEFI Secure Boot dbx.
- Security checks: `fwupdmgr security --force`

## Other Hardware

- Memory: `sudo lshw -class memory`
- PCI devices: `sudo lspci -nnmmvkD | less`
- Storage Devices : `sudo smartctl --xall /dev/nvme0 | grep -i firmware`