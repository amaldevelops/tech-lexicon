# Linux Networking

- `ssh` : Secure Shell command in Linux
- `traceroute` : Trace all the network hops to reach the destination
- `wget` : Direct download files from the internet
- `ufw` : Firewall command
- `iptables` : Base firewall for all other firewall utilities to interface with
- `w` : Show who is logged on and what they are doing
- `tree` : Analyze current location in the file tree. It will show you the entire lower tree.
- `ifconfig` Or `ip a` : Displays your current network configuration,mainly your IP address if connected.
- `sudo ifup eth0` Or `ifup [interface]` : Enables the specified interface.
- `sudo ifdown wlan0` Or `ifdown [interface]` : Disables the specified interface. Can be useful to disable Wi-Fi if you are already connected by cable for example.
- `netstat` : Netstat is a powerful tool to monitor what your Linux machine is doing with the network. For example, you can see every port open and every traffic flow. Basic usages to display all listening connections you can use: `netstat -l -p ` option will add the process id (PID). `netstat -lp -c` option allows you to refresh data continuously `netstat -lpc`
