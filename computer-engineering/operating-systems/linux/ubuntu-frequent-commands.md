# Ubuntu Daily Commands

## Frequently used commands

- `sudo udisksctl power-off -b /dev/sda` : Turn off external SSD/HDD power
- Restart the desktop portal to free memory bug in Ubuntu:  
  `systemctl restart --user xdg-desktop-portal-gnome.service`
- Force update Google Chrome (after downloading deb file):  
  `sudo apt update && sudo apt upgrade && sudo apt install ./google-chrome-stable_current_amd64.deb`
- `kill [pid]` / `kill -9 [pid]` : Terminate a process (`-9` forces termination)
- `killall [name]` : Terminate all processes matching a name

## Ubuntu Shortcuts

```markdown
# Ubuntu Keyboard Shortcuts

## Window Management

- **Super + Left/Right Arrow**: Snap window to left/right half of the screen
- **Super + Up Arrow**: Maximize window
- **Super + Down Arrow**: Restore/minimize window
- **Alt + Tab**: Switch between open applications
- **Alt + F4**: Close current window
- **Alt + Space**: Open window menu

## Workspaces

- **Super + S**: Workspace overview (Activities)
- **Ctrl + Alt + Arrow (←/→/↑/↓)**: Switch workspaces
- **Shift + Ctrl + Alt + Arrow**: Move window between workspaces

## Launchers and Search

- **Super**: Open Activities overview / main menu
- **Alt + F2**: Run a command

## Screenshot and Screen Capture

- **PrtSc**: Take screenshot of entire screen
- **Alt + PrtSc**: Take screenshot of current window
- **Shift + PrtSc**: Select area to screenshot

## Application and System

- **Ctrl + Alt + T**: Open Terminal
- **Super + L**: Lock the screen
- **Ctrl + Alt + Delete**: Bring up logout and restart menu

## File Management (Nautilus)

- **Ctrl + L**: Focus location bar
- **Ctrl + N**: New window
- **Ctrl + 1/2/3**: Switch views (icons, list, compact)
- **F2**: Rename selected file

## Miscellaneous

- **Super + A**: Show all applications
- **Super + D**: Show desktop
- **Ctrl + Q**: Quit application
```
