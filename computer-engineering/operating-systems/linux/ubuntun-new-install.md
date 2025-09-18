# Ubuntu New Install Configuration

## Ubuntu Security

- Enable and configure the Uncomplicated Firewall (UFW) with rules to restrict unnecessary network access : `sudo ufw enable`

## Setup Development tools

- [Setup GIT](/software-development/tools/git/git-configuration.md)

## Best Tools to Monitor Temps on Your Legion 5 (Ubuntu)

Install These Tools

```
sudo apt update
sudo apt install lm-sensors psensor nvtop acpi glances
```

- Detect Sensors : `sudo sensors-detect`

- Read CPU & System Temps : `sensors`

- Monitor NVIDIA GPU Temp (if using dGPU) : `sudo ubuntu-drivers autoinstall`
- Then check with: `nvidia-smi`

### Psensor

Launch it via terminal: `psensor`

### NVTOP (for NVIDIA GPU usage/temp)

Live terminal dashboard like htop, but for GPUs, Run : `nvtop`

## Gnome Extensions

- Install GNOME Shell Extensions: `sudo apt install gnome-shell-extensions`
- Go to : https://extensions.gnome.org to find the extensions required
- To make sure Extension Is Installed: `gnome-extensions list`
- Enable the Extension using command line `gnome-extensions enable`
- Restart GNOME Shell (on X11 only): Press Alt + F2, type r, press Enter

### Show Temps on GNOME Top Bar using Gnome Extensions

- Search for `System Monitor` and click install button
- Make Sure Extension Is Installed: `gnome-extensions list`
- Enable the Extension using command line `gnome-extensions enable system-monitor@paradoxxx.zero.gmail.com` or you can run the GNOME Extensions App (GUI): `gnome-extensions-app`

## Show Keyboard Caos Lock and Num Lock

- Search for `Lock Keys` or
- `https://extensions.gnome.org/extension/36/lock-keys/`
