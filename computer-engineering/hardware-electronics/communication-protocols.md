# Common communication protocols

### UART (Universal Asynchronous Receiver/Transmitter)

- **Description**: Simple, asynchronous serial protocol using TX/RX. Great for point-to-point device communication or debugging logs. Doesn’t need a shared clock; both ends agree on speed (baud rate).
- **Key Points**: Only connects two devices directly; supports full-duplex; common for microcontroller terminal output.

### SPI (Serial Peripheral Interface)

- **Description**: Synchronous, master-slave protocol with 4 lines: SCLK, MOSI, MISO, SS/CS. Enables very high-speed, full-duplex transfers and is popular with sensors and memory chips.
- **Key Points**: Fast and reliable for short runs; scales poorly since every slave needs a separate chip select line; good for displays, SD cards, ADCs.

### I2C (Inter-Integrated Circuit)

- **Description**: Two-wire synchronous protocol (SDA and SCL). Master initiates communication; each node has an address. Widely used to connect several peripherals (e.g. sensors, RTCs).
- **Key Points**: Efficient for low-to-moderate data rates and multiple peripherals; requires pull-up resistors; modest speed and range.

### 1-Wire

- **Description**: Simple bus with one data line plus ground. Multiple devices, each with unique address, can be chained easily.
- **Key Points**: Used for temperature sensors and ID chips; slow (~16 kbps); minimal wiring for low-power applications.

### USB (Universal Serial Bus)

- **Description**: High-speed and versatile with built-in power delivery. Used for connecting peripherals, debugging, or mass storage.
- **Key Points**: Supports plug-and-play, powerful device enumeration; moderate cable length; power + data.

### CAN (Controller Area Network)

- **Description**: Differential, multi-master, priority-driven bus protocol. Very robust for noisy or harsh environments.
- **Key Points**: Dominates automotive and industrial sectors; supports many nodes; strong error detection and fault tolerance; moderate speed.

### Zigbee

- **Description**: Wireless mesh protocol designed for low-power and low-data-rate IoT applications.
- **Key Points**: Mesh networking; secure; ideal for building, home automation, and sensor networks.

### Bluetooth / BLE

- **Description**: Wireless, peer-to-peer and mesh protocol, best for personal area networks and accessories (e.g., wearables).
- **Key Points**: Low power, easy pairing, omnipresent in mobile devices.

### Wi-Fi

- **Description**: High-speed, long-range wireless protocol; widely used for networking and internet access.
- **Key Points**: Relatively high energy cost; great for large data, broad device sharing.

### LoRa / LoRaWAN

- **Description**: Low-power, ultra-long-range wireless protocol for sensor networks.
- **Key Points**: Limited speed, but can cover kilometers; used in smart agriculture, city infrastructure.

### Z-Wave

- **Description**: Proprietary wireless mesh for smart home automation.
- **Key Points**: Mesh for range extension; low power and low speed; not as common as Zigbee, but common in IoT.

### NFC (Near Field Communication)

- **Description**: Very short-range wireless standard (tap-to-communicate).
- **Key Points**: Extremely low power; instant, secure connections; payments and smart cards.

### RFID (Radio Frequency Identification)

- **Description**: Often one-way wireless protocol for tagging and tracking.
- **Key Points**: Passive tags powered by reader; varies in range and speed; asset tracking and authentication.

### Infrared (IR/IrDA)

- **Description**: Short-range, line-of-sight optical protocol.
- **Key Points**: Used in remote controls and some legacy communication; limited bandwidth.

---

#### Choosing a Protocol

- **Board-level, short-range**: SPI, I2C, UART, 1-Wire
- **Device-to-device, moderate speed**: CAN, USB
- **Short-range wireless**: Bluetooth, Zigbee, Z-Wave, RFID, NFC, Infrared
- **Long-range, low-power wireless**: LoRa
- **High-speed, high-bandwidth wireless**: Wi-Fi

Each protocol targets certain scenarios: for instance, SPI/I2C is key in integrating multiple sensors, UART excels at simple serial lines, CAN is essential for robust bus comms, and Zigbee/Wi-Fi/BLE offer wireless options for IoT deployments.
