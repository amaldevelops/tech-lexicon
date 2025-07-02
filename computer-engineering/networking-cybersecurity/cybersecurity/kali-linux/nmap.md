# NMAP - the Network MAPper

Nmap is the scanning tool that provides the ability to find a computer system that is vulnerable to attacks. Intruders can scan for UDP and TCP listening ports and can design their attacks accordingly.

- For a complete list of the options for Nmap, you can see the manual of the NMAP in website [NMAP User manual](http://www.insecure.org/nmap) . Also “man nmap” provides complete list of options for nmap.

## How to use NMAP?

- Nmap is a simple tool to use and is accessed via command line. To run most commands in Nmap, root privileges are required.
- Usage syntax is: `Nmap –sflag IP-address/network address`
- Flag are according to the purpose, for example:
  - (n is the host number)
  - Icmp ping : `# nmap -sP 172.16.63.0/24`
  - tcp ping : `# nmap -sP -PT80 172.16.63.0/24`
  - TCP connect : `# nmap -sT 172.16.63.n`
  - Stealth Scanning : `# nmap -sS 172.16.63.n`
  - UDP Scanning : `# nmap -sU 172.16.63.n`
  - Stealth FIN : `# nmap -sF 172.16.63.n`

## Ping Sweeping: To check what hosts are UP

Ping sweeping can be used with option of ”-sP” for finding all the running hosts in the network. The network address and the subnet mask need to be given. Nmap sends an ICMP echo and a TCP ACK to each host it scans. Hosts that respond to either are considered to be up. 
You need to use ifconfig on the terminal to find your host address and then use that to figure out your network address. Once you know which machines on a network are up, usually the next step is port scanning.

## Port Scanning

Different types of port scans are provided by Nmap: TCP connect, TCP SYN, Stealth FIN, UDP scans.

### TCP connect

One form of port scanning is TCP connect which uses the connect() system call to open connections to interesting ports on the target host and complete the 3-way TCP handshake. An important issue is that the probe is easily detected by the target host. "-sT" flag is used for this purpose.

### Stealth Scanning

When you do not want to be logged in at the target system while port scanning then the best option is to use Stealth Scanning. TCP SYN scans are less prone to logging on the target's machine, because a full handshake never completes. A SYN scan starts by sending a SYN packet, which is the first packet in TCP negotiation. Any open ports will respond with a SYN|ACK, as they should. However, the you send a RST instead of an ACK, which terminates the connection. The "-sS" flag will launch a SYN scan against a host or network. 

### UDP Scanning

Using the UDP scan "-sU" a 0-byte UDP packet is sent to each port for finding open UDP ports. If the port is closed the host will return an ICMP error message. This task may take long time, if it won’t finish in 5-6 minutes cancel it using Ctrl+C

### OS Fingerprinting: Which OS is running on the host?

Finding the operating system of the target host is a simple task with Nmap using “-sS -O” flag. This information can be used to customize attacks based on the vulnerability of each OS. This has to be combined with a port scan and not a ping scan. Nmap accomplishes this by sending different types of probes to the host, which will narrow the target operating system. Fingerprinting the TCP stack includes such techniques as FIN probing to see what kind of response the target has, BOGUS flag probing to see the remote host's reaction to undefined flags sent with a SYN packet, TCP Initial Sequence Number (ISN) sampling to find patterns of ISN numbers, as well as other methods of determining the remote operating system.