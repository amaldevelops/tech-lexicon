# Computer hardware basics

**Computer hardware** encompasses the architecture, components, and technologies that enable modern computers to achieve high performance, reliability, and scalability. Here’s an expert overview, spanning both foundational elements and advanced architectural features.

## Core Hardware Components

- **Central Processing Unit (CPU):**
  The brain of the computer, containing subcomponents such as: - **Registers:** High-speed temporary storage for immediate data and instructions. - **Arithmetic Logic Unit (ALU):** Executes arithmetic and logical operations. - **Control Unit (CU):** Directs operations of the processor and coordinates with memory and peripherals[^2] [^3].
- **Memory:**
  - **RAM (Random Access Memory):** Temporary storage for data and programs in use.
  - **ROM/Flash (Non-Volatile Memory):** Stores firmware and essential code that persists when powered off.
- **Motherboard:**
  The main circuit board connecting CPU, memory, storage, and expansion slots. The chipset (Northbridge/Southbridge) manages communication between high-speed (RAM, GPU) and lower-speed devices (USB, storage)[^3].
- **Input/Output (I/O) Interfaces:**
  Ports and controllers for peripherals (keyboard, mouse, display, storage devices, network interfaces)[^2].
- **Expansion Slots:**
  Allow additional cards (graphics, sound, network) to be added for enhanced functionality[^3].
- **Power Supply Unit (PSU):**
  Converts AC to regulated DC power for all components[^3].

## Advanced Hardware Architecture

- **System Bus:**
  Includes address, data, and control buses, linking CPU, memory, and peripherals for data transfer and coordination[^2].
- **Bootloader \& Firmware:**
  The bootloader initializes hardware and loads the operating system from storage or network into memory for execution[^2].
- **Multiplexers, Encoders, and Special Registers:**
  Used for managing data flow, prioritizing operations, and optimizing instruction execution in modern CPUs[^4].
- **Pipelining and Parallelism:**
  Techniques that allow multiple instructions or data streams to be processed simultaneously, dramatically increasing throughput and efficiency[^5].
- **SIMD (Single Instruction, Multiple Data):**
  Architectures enable parallel processing of data, crucial for applications like scientific computing and graphics[^2].
- **RISC (Reduced Instruction Set Computer):**
  Uses a small, highly optimized set of instructions for faster execution and efficiency, common in ARM and modern CPUs[^8].
- **Harvard vs. von Neumann Architectures:**
  - **Harvard:** Separate memory and pathways for instructions and data, enabling simultaneous access and improved performance.
  - **von Neumann:** Shared memory and pathways, simpler but can be a bottleneck in high-speed systems[^2].

## Specialized and Embedded Hardware

- **Embedded Systems:**
  Purpose-built computers with dedicated hardware and software, optimized for specific tasks (e.g., automotive, IoT, industrial control). Often use microcontrollers (CPU, memory, peripherals on one chip) or microprocessors for more complex tasks. Key features include real-time operation, resource constraints, and high reliability[^1].
- **Peripherals and Sensors:**
  Advanced systems integrate a wide range of peripherals, from high-speed network adapters to specialized sensors and actuators[^1].

## High-Performance and Scalable Architectures

- **Cluster and Client-Server Architectures:**
  Multiple computers (clients) interact with centralized servers, or clusters of systems work together for distributed computing, enabling scalability and redundancy[^2] [^6].
- **GPU Acceleration:**
  Graphics Processing Units (GPUs) provide massive parallel processing power, essential for AI, machine learning, and scientific simulations[^6].
- **Virtualization:**
  Hardware-assisted virtualization allows multiple operating systems or isolated environments to run on a single physical machine, improving resource utilization and security[^5].

## Summary Table

| Component/Concept        | Function/Benefit                                      |
| :----------------------- | :---------------------------------------------------- |
| CPU (ALU, CU, Registers) | Core data processing and control                      |
| RAM/ROM                  | Fast, volatile memory / persistent storage            |
| Motherboard \& Chipset   | Connects and coordinates all hardware                 |
| System Bus               | Transfers data and signals between components         |
| Pipelining/Parallelism   | Increases instruction throughput                      |
| SIMD/RISC                | Efficient, high-speed data processing                 |
| Embedded Systems         | Specialized, reliable, resource-constrained computing |
| GPU Acceleration         | High-performance parallel computation                 |
| Virtualization           | Flexible, scalable resource management                |

[^1]: https://www.hanzsung.com/news/understanding-the-architecture-and-components-of-embedded-computers.html
[^2]: https://www.spiceworks.com/tech/tech-general/articles/what-is-computer-architecture/
[^3]: https://www.ciscopress.com/articles/article.asp?p=3188196\&seqNum=5
[^4]: https://abit.edu.in/wp-content/uploads/2022/07/advanced-computer-architecture.pdf
[^5]: https://intechhouse.com/blog/hardware-architecture-basics-and-types/
[^6]: https://library.fiveable.me/advanced-computer-architecture
[^7]: https://en.wikipedia.org/wiki/Computer_architecture
[^8]: https://www.elktech.org/ITE/ITE/ITE/ITE7Ch3.pdf
[^9]: https://www.youtube.com/watch?v=lGB2UszHt7Y
