## Conky System Information

A customizable Conky desktop system monitor for Ubuntu. It displays live information such as CPU usage, memory, storage, network activity, processes, uptime, and system information directly on the desktop.

1) **Install:**

```bash
sudo apt update
sudo apt install conky-all
```
2) **Verify:**

```bash
conky --version
```

3) **Create the configuration directory:**

```bash
mkdir -p ~/.config/conky
```

4) **Create and open the Conky configuration in VS Code:**

```bash
code ~/.config/conky/conky.conf
```
- conky.conf is available in [Dot Files Folder](../dot-files/conky.conf)
Alternatively, You can Paste your Conky configuration into the file and save it with `Ctrl+S`.


1) **Test the configuration:**

```bash
conky -c ~/.config/conky/conky.conf
```

6) **Stop Conky:**

```bash
pkill conky
```

7) **Create the autostart directory:**

```bash
mkdir -p ~/.config/autostart
```

8) **Create and open the autostart file in VS Code:**

```bash
code ~/.config/autostart/conky.desktop
```

Add:

```ini
[Desktop Entry]
Type=Application
Name=Conky
Comment=Desktop system monitor
Exec=/usr/bin/conky -c /home/YOUR_USERNAME/.config/conky/conky.conf
Terminal=false
StartupNotify=false
X-GNOME-Autostart-enabled=true
```

Replace `YOUR_USERNAME` with your Ubuntu username.

Find your username with:

```bash
whoami
```

For example:

```ini
Exec=/usr/bin/conky -c /home/alex/.config/conky/conky.conf
```

Save the file with `Ctrl+S`.

9) **Restart Conky after configuration changes:**

```bash
pkill conky
conky -c ~/.config/conky/conky.conf
```

10) **Check if Conky is running:**

```bash
pgrep -a conky
```

11) **Reboot to test autostart:**

```bash
sudo reboot
```

Conky should automatically start when you log into Ubuntu.

12) **Configuration file:**

```text
~/.config/conky/conky.conf
```

13) **Autostart file:**

```text
~/.config/autostart/conky.desktop
```