# Raspberry Pi Pico

https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html

Raspberry Pi Pico is a low-cost, high-performance microcontroller board with flexible digital interfaces. Key features include:

- RP2040 microcontroller chip designed by Raspberry Pi in the United Kingdom

- Dual-core Arm Cortex M0+ processor, flexible clock running up to 133 MHz

- 264KB of SRAM, and 2MB of on-board flash memory

- USB 1.1 with device and host support

- Low-power sleep and dormant modes

- Drag-and-drop programming using mass storage over USB

- 26 × multi-function GPIO pins

- 2 × SPI, 2 × I2C, 2 × UART, 3 × 12-bit ADC, 16 × controllable PWM channels

- Accurate clock and timer on-chip

- Temperature sensor

- Accelerated floating-point libraries on-chip

- 8 × Programmable I/O (PIO) state machines for custom peripheral support

- The Raspberry Pi Pico comes as a castellated module which allows soldering direct to carrier boards, while the Pico H comes with pre-soldered headers.
  Both boards have a three pin Serial Wire Debug (SWD) header. However, the Pico H has this broken out into a small, keyed, 3-pin connector while the Pico has three castellated through-hole pins adjacent to the edge of the board.

## Resetting Flash memory

For Pico-series devices, BOOTSEL mode lives in read-only memory inside the RP2040 or RP2350 chip, and can’t be overwritten accidentally. No matter what, if you hold down the BOOTSEL button when you plug in your Pico, it will appear as a drive onto which you can drag a new UF2 file. There is no way to brick the board through software. However, there are some circumstances where you might want to make sure your flash memory is empty. You can do this by dragging and dropping a special UF2 binary (flash_nuke.uf2) onto your Pico when it is in mass storage mode.

## Getting Started with Pico

Refer getting-started-with-pico.pdf
