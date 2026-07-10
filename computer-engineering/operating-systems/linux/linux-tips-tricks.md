# Linux tips and Tricks

## 1. The "Magic" `/proc` Directory (The Living OS)

In Linux, **everything is a file**. There is a folder on your system called `/proc` that doesn't actually exist on your hard drive. It is a "virtual filesystem" generated dynamically by the Linux kernel in your computer's RAM. It lets you peer directly into the brain of your running computer.

* Open a terminal and run: `cat /proc/cpuinfo` *(You'll see exactly what your CPU is doing)*.
* Run: `cat /proc/meminfo` *(Live, raw memory stats)*.
* Want to know how long your computer has been turned on down to the microsecond? Run: `cat /proc/uptime`.

---

## 2. Reverse Search (`Ctrl + R`)

Stop tapping the Up Arrow fifty times to find a command you ran yesterday.

1. Press **`Ctrl + R`** in your terminal.
2. Start typing a keyword from a past command (like `sftp` or `mount`).
3. The terminal will instantly search your history and autocomplete the exact command. Hit `Enter` to run it, or keep pressing **`Ctrl + R`** to cycle backward through older matches.

---

## 3. Instantly Turn Any Folder into a Secret File Server

You can use a quick Python command to instantly pull files onto your smartphone or another computer on your home Wi-Fi without any cables.

1. Navigate to the directory in your terminal:
```bash
cd ~/Pictures

```


2. Start the temporary server:
```bash
python3 -m http.server 9000

```


3. Open your smartphone's web browser and type in your laptop's local IP address followed by `:9000` (e.g., `http://192.168.1.50:9000`).

Boom. You can now browse and download all your laptop's pictures right from your phone.

---

## 4. Run Commands in the Background (`&` and `Ctrl + Z`)

Have you ever run a command (like opening a text editor or starting a process) and realized it completely locked up your terminal window? You don't need to open a new tab.

* Add an ampersand **`&`** to the end of any command to run it in the background immediately:
```bash
nautilus . &

```


* If a command is already running and blocking your terminal, press **`Ctrl + Z`** to instantly freeze it. Then, type `bg` and hit `Enter` to push it into the background so you get your terminal back!

---

## 5. The Ultimate Undo/Fix Shortcuts

The Linux terminal has built-in text navigation shortcuts that will save you thousands of keystrokes:

* **`Ctrl + A`**: Jump instantly to the **start** of the line (no more holding the Left Arrow).
* **`Ctrl + E`**: Jump instantly to the **end** of the line.
* **`Ctrl + U`**: Delete everything from your cursor back to the start of the line (perfect for clearing out a mistyped password).
* **`Ctrl + W`**: Delete just the last word you typed.

---

## 6. The "Sudo" Typo Fix (`sudo !!`)

We have all typed a long, complex command, hit enter, and been hit with: `Permission denied (you need to be root)`.

Instead of retyping or arrowing up and moving the cursor all the way to the front to insert `sudo`, just type:

```bash
sudo !!

```

The `!!` literally means "repeat the last command." Linux will automatically glue `sudo` to the front of whatever you just did and run it again.