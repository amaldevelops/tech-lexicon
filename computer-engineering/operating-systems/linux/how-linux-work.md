# How Linux Kernel Works

[Back to Linux reference](./README.md)

The **Linux kernel** is the core software that sits between your applications and the hardware. It manages CPU, memory, devices, networking, filesystems, and processes.

A useful mental model is:

```text
┌─────────────────────────────────────┐
│          Applications               │
│  Browser · VS Code · Docker · SSH   │
└──────────────────┬──────────────────┘
                   │
             System Calls
                   │
┌──────────────────▼──────────────────┐
│           Linux Kernel              │
│                                     │
│  Process Management                 │
│  Memory Management                  │
│  Filesystems                        │
│  Networking                         │
│  Device Drivers                     │
│  Security                           │
│  Scheduling                         │
└──────────────────┬──────────────────┘
                   │
              Hardware
                   │
┌──────────────────▼──────────────────┐
│ CPU · RAM · Disk · GPU · USB · NIC │
└─────────────────────────────────────┘
```

The important part is that **applications generally don't talk directly to hardware**. They ask the kernel to do things for them.

---

# 1\. What exactly is the kernel?

When you install Ubuntu, you're actually getting several major layers:

```text
Ubuntu
│
├── Applications
│   ├── Firefox
│   ├── VS Code
│   └── Terminal
│
├── User-space software
│   ├── systemd
│   ├── bash
│   ├── libraries
│   └── utilities
│
└── Linux kernel
    ├── CPU management
    ├── Memory management
    ├── Drivers
    ├── Filesystems
    ├── Networking
    └── Security
```

**Linux itself is the kernel.**

Ubuntu is a distribution built around that kernel plus thousands of other packages.

---

# 2\. Kernel mode vs user mode

One of the most important concepts in operating systems is **privilege levels**.

Your application runs in **user space**:

```text
User Space
────────────────────────────
Firefox
VS Code
Python
Node.js
Docker CLI
bash
────────────────────────────
        System Calls
────────────────────────────
Kernel Space
────────────────────────────
Linux Kernel
────────────────────────────
Hardware
```

The kernel runs with much greater privileges.

Why?

Imagine a normal application could execute:

```text
WRITE_TO_DISK()
DISABLE_NETWORK()
READ_ANY_RAM()
STOP_CPU()
```

without restrictions.

One buggy application could destroy the entire system.

Instead, applications have to ask the kernel.

---

# 3\. System calls

Applications communicate with the kernel primarily through **system calls**.

For example, when a program wants to read a file:

```text
Application
    │
    │ read()
    ▼
Linux Kernel
    │
    │ filesystem
    │
    │ storage driver
    ▼
SSD / HDD
```

A C program might do:

```c
int fd = open("file.txt", O_RDONLY);

read(fd, buffer, 100);
```

`open()` and `read()` eventually enter the kernel.

The application doesn't need to know:

- which SSD you have

- which filesystem you're using

- which controller is attached

- how sectors are addressed

- how interrupts work

The kernel handles those details.

---

# 4\. Processes

When you execute:

```bash
./my-program
```

the kernel creates a **process**.

Conceptually:

```text
Program on disk
      │
      ▼
     exec()
      │
      ▼
┌───────────────┐
│   Process     │
│               │
│ PID: 1234     │
│ Memory        │
│ Registers     │
│ File handles  │
│ Permissions   │
└───────────────┘
```

The kernel keeps track of processes using internal data structures.

You can see processes with:

```bash
ps aux
```

or:

```bash
top
```

or:

```bash
htop
```

The PID is assigned by the kernel.

For example:

```text
PID   COMMAND
1     systemd
842   sshd
1201  bash
1420  node
1520  firefox
```

---

# 5\. CPU scheduling

You might have:

```text
CPU
│
├── Firefox
├── VS Code
├── Terminal
├── Docker
├── SSH
└── systemd
```

But your CPU might have only:

```text
8 cores
```

So who gets CPU time?

**The kernel scheduler.**

Very roughly:

```text
Process A ─────┐
Process B ─────┤
Process C ─────┼──► Scheduler ───► CPU
Process D ─────┤
Process E ─────┘
```

The scheduler decides:

> "Which runnable task should execute on this CPU now?"

It can rapidly switch between tasks.

This creates the illusion that everything is executing simultaneously, although the exact mechanism depends on the number of cores and runnable tasks.

---

# 6\. Context switching

Suppose CPU core 1 is running Firefox:

```text
CPU
 │
 ▼
Firefox
```

The kernel may switch it to VS Code:

```text
Firefox
   │
   │ context switch
   ▼
VS Code
```

The kernel preserves the execution state of the previous task and loads the state of the next one.

This includes things such as:

- CPU registers

- instruction pointer

- stack state

- memory-management state

This is called a **context switch**.

---

# 7\. Memory management

Suppose you run:

```bash
node server.js
```

Node asks the operating system for memory.

The kernel manages:

```text
Physical RAM
┌──────────────────────────┐
│ Kernel                   │
├──────────────────────────┤
│ Process A                │
├──────────────────────────┤
│ Process B                │
├──────────────────────────┤
│ Process C                │
├──────────────────────────┤
│ Cache                    │
└──────────────────────────┘
```

But there's an important trick.

Processes generally don't see physical RAM directly.

They see **virtual memory**.

For example:

```text
Process A

Virtual Address
0x00000000
     │
     ▼
┌───────────────┐
│ Virtual Memory│
└───────┬───────┘
        │
        │ Page tables
        ▼
┌───────────────┐
│ Physical RAM  │
└───────────────┘
```

This provides:

- process isolation

- memory protection

- virtual address spaces

- efficient memory allocation

- memory mapping

- shared memory

The CPU's **MMU (Memory Management Unit)** works closely with the kernel to translate virtual addresses into physical addresses.

---

# 8\. What happens when memory isn't available?

Linux can use **swap**.

Conceptually:

```text
RAM
 │
 │ memory pressure
 ▼
Kernel
 │
 ▼
Swap
 │
 ▼
Disk
```

For example:

```text
RAM
┌──────────────────┐
│ Process A        │
│ Process B        │
│ Process C        │
│ Cache            │
└──────────────────┘

             ↓

Disk
┌──────────────────┐
│ Swap             │
│                  │
└──────────────────┘
```

The kernel can move memory pages between RAM and swap.

This is much slower than RAM, which is why heavy swapping can make a system feel extremely slow.

---

# 9\. Filesystems

When you run:

```bash
cat /etc/hostname
```

`cat` doesn't directly understand your SSD.

The request travels roughly like:

```text
cat
 │
 ▼
read()
 │
 ▼
VFS
 │
 ▼
Filesystem
 │
 ├── ext4
 ├── XFS
 ├── Btrfs
 └── ...
 │
 ▼
Block layer
 │
 ▼
Storage driver
 │
 ▼
SSD
```

Linux has a **VFS — Virtual File System** layer.

This is extremely powerful.

Applications can use:

```text
open()
read()
write()
close()
```

without caring whether the underlying filesystem is:

```text
ext4
xfs
btrfs
tmpfs
nfs
```

The kernel abstracts the differences.

---

# 10\. Device drivers

Your computer contains hundreds of hardware components.

For example:

```text
USB keyboard
Ethernet
Wi-Fi
GPU
NVMe
Audio
Bluetooth
Webcam
```

The kernel uses **device drivers** to communicate with them.

```text
Application
     │
     ▼
Kernel subsystem
     │
     ▼
Device driver
     │
     ▼
Hardware
```

For example:

```text
Network application
        │
        ▼
Socket API
        │
        ▼
TCP/IP stack
        │
        ▼
Network driver
        │
        ▼
Ethernet / Wi-Fi hardware
```

This abstraction is one of the major reasons Linux can support enormous amounts of hardware.

---

# 11\. Networking

Linux contains a complete networking stack.

A simplified request:

```text
Application
     │
     ▼
socket()
     │
     ▼
TCP / UDP
     │
     ▼
IP
     │
     ▼
Routing
     │
     ▼
Network driver
     │
     ▼
NIC
     │
     ▼
Ethernet / Wi-Fi
```

When you run:

```bash
curl https://example.com
```

a huge amount happens underneath:

```text
curl
 │
 ▼
socket()
 │
 ▼
DNS
 │
 ▼
TCP
 │
 ▼
TLS
 │
 ▼
IP routing
 │
 ▼
Network driver
 │
 ▼
NIC
 │
 ▼
Internet
```

The kernel handles most of the networking machinery below the application layer.

---

# 12\. Interrupts

Hardware needs a way to tell the CPU:

> "Something happened."

That's where **interrupts** come in.

For example, your network card receives a packet:

```text
Network packet
      │
      ▼
     NIC
      │
      │ interrupt
      ▼
     CPU
      │
      ▼
Linux kernel
      │
      ▼
Network stack
      │
      ▼
Application
```

The CPU temporarily responds to the hardware event and the kernel processes it.

Modern Linux also uses mechanisms such as **softirqs**, **tasklets**, and **workqueues** to defer work appropriately rather than doing everything directly inside a hard interrupt handler.

---

# 13\. Kernel modules

Linux doesn't necessarily have to contain every driver directly in the core kernel image.

It can load **kernel modules**.

Check loaded modules:

```bash
lsmod
```

Load one:

```bash
sudo modprobe module_name
```

Remove one:

```bash
sudo modprobe -r module_name
```

Conceptually:

```text
Linux Kernel
│
├── Core
├── Networking
├── Filesystems
├── Scheduler
│
└── Modules
    ├── GPU driver
    ├── USB driver
    ├── Wi-Fi driver
    └── Filesystem driver
```

This makes the kernel extensible.

---

# 14\. The kernel boot process

When you turn on your computer:

```text
Power On
   │
   ▼
Firmware
UEFI / BIOS
   │
   ▼
Bootloader
GRUB
   │
   ▼
Linux Kernel
   │
   ▼
Kernel initialization
   │
   ▼
systemd
   │
   ▼
Services
   │
   ▼
Login / Desktop
```

On Ubuntu, a typical boot looks roughly like:

```text
UEFI
 │
 ▼
GRUB
 │
 ├── Linux kernel
 └── initramfs
      │
      ▼
Linux kernel
      │
      ▼
Mount root filesystem
      │
      ▼
Start PID 1
      │
      ▼
systemd
      │
      ├── Network
      ├── SSH
      ├── Docker
      ├── Desktop
      └── Other services
```

---

# 15\. What is `systemd`?

A common point of confusion:

**systemd is not the Linux kernel.**

It's a user-space system and service manager.

The kernel eventually starts the first user-space process:

```text
Linux Kernel
     │
     ▼
PID 1
     │
     ▼
systemd
```

Then systemd starts services:

```text
systemd
 │
 ├── NetworkManager
 ├── ssh
 ├── Docker
 ├── dbus
 ├── GNOME
 └── ...
```

You can inspect it with:

```bash
systemctl
```

---

# 16\. Processes communicate with each other

The kernel also provides **IPC — Inter-Process Communication**.

Examples include:

```text
Pipes
Unix sockets
Signals
Shared memory
Message queues
Futexes
```

For example:

```bash
ls | grep ".txt"
```

creates a pipeline:

```text
ls
 │
 │ stdout
 ▼
Pipe
 │
 │ stdin
 ▼
grep
```

The kernel creates and manages that pipe.

---

# 17\. Security

The kernel is also responsible for enforcing security boundaries.

For example:

```text
User A
  │
  ├── permissions
  └── processes

User B
  │
  ├── permissions
  └── processes
```

Linux permissions:

```bash
-rw-r--r--  user group file.txt
```

are ultimately enforced by the kernel.

Linux also provides security mechanisms such as:

- capabilities

- namespaces

- cgroups

- seccomp

- LSM

- SELinux

- AppArmor

These become particularly important for containers.

---

# 18\. Why Docker relies heavily on the kernel

Docker isn't a virtual machine in the traditional sense.

Containers use Linux kernel features.

A simplified view:

```text
                 Linux Kernel
                      │
        ┌─────────────┼─────────────┐
        │             │             │
   Container A   Container B   Container C
        │             │             │
      nginx          node          postgres
```

Important kernel features include:

### Namespaces

Provide isolation:

```text
Container A sees:
PID 1
PID 2
PID 3

Container B sees:
PID 1
PID 2
PID 3
```

They're actually using different PID namespaces.

### cgroups

Control resource usage:

```text
Container A
 ├── CPU: 2 cores
 ├── RAM: 512 MB
 └── PIDs: 100

Container B
 ├── CPU: 4 cores
 ├── RAM: 2 GB
 └── PIDs: 500
```

The kernel enforces those limits.

---

# 19\. A complete example

Consider this command:

```bash
cat /etc/hostname
```

A simplified journey is:

```text
You type:

cat /etc/hostname
        │
        ▼
      bash
        │
        ▼
     fork()
        │
        ▼
     execve()
        │
        ▼
      cat
        │
        ▼
     open()
        │
        ▼
Linux Kernel
        │
        ▼
      VFS
        │
        ▼
     ext4
        │
        ▼
   block layer
        │
        ▼
   NVMe driver
        │
        ▼
      NVMe SSD
        │
        ▼
      data
        │
        ▼
     kernel
        │
        ▼
     read()
        │
        ▼
      cat
        │
        ▼
     stdout
        │
        ▼
      terminal
```

The application sees a simple abstraction:

```text
open()
read()
write()
close()
```

The kernel handles the complexity underneath.

---

# 20\. The kernel's major responsibilities

You can reduce the entire Linux kernel to these major subsystems:

```text
                    Linux Kernel
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
       ▼                 ▼                 ▼
   Processes           Memory           Devices
   Scheduler           Virtual RAM      Drivers
   Threads             Paging           Interrupts
       │                 │                 │
       └─────────────────┼─────────────────┘
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
       ▼                 ▼                 ▼
   Filesystems       Networking         Security
   VFS               TCP/IP             Permissions
   ext4              Sockets             Namespaces
   XFS               Routing             cgroups
   Btrfs
```

---

# 21\. The most important mental model

If you're learning Linux as a developer, remember this:

```text
Application
     │
     │ system calls
     ▼
┌────────────────────────────┐
│          Kernel            │
│                            │
│ "I'll manage the machine." │
│                            │
│ CPU                        │
│ Memory                     │
│ Processes                  │
│ Files                      │
│ Network                    │
│ Devices                    │
│ Security                   │
└─────────────┬──────────────┘
              │
              ▼
           Hardware
```

The kernel's fundamental job is:

> **Provide controlled, safe abstractions over hardware and manage shared system resources.**

Once you understand **system calls → processes → virtual memory → scheduling → filesystems → drivers → interrupts → networking**, most of Linux starts fitting together naturally.
