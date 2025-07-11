# Arduino basics

**Arduino** is an open-source electronics platform based on easy-to-use hardware and software, ideal for beginners and hobbyists to learn programming and electronics by building interactive projects[^1][^3][^6].

## What Is Arduino?

- **Hardware:** The core is a microcontroller board (like Arduino Uno) with digital and analog pins to connect components such as LEDs, sensors, and motors[^3] [^6].
- **Software:** Programs (called _sketches_) are written in the Arduino IDE using a simplified version of C/C++ and uploaded to the board via USB[^3] [^6].

### Basic Concepts

- **Digital Pins:** Used for digital input (e.g., buttons) or output (e.g., LEDs). Each pin can be set as INPUT or OUTPUT[^3].
- **Analog Pins:** Used to read varying voltages, useful for sensors like potentiometers[^3].
- **Power Pins:** Supply 3.3V or 5V to components, with GND (ground) to complete circuits[^3].

### Anatomy of an Arduino Sketch

Every Arduino program has two main functions[^2] [^3] [^4]:

```cpp
void setup() {
  // Runs once when the board is powered on or reset
}

void loop() {
  // Runs repeatedly after setup() finishes
}
```

- **setup():** Initialize variables, set pin modes, start serial communication. Runs only once[^2] [^3] [^4].
- **loop():** Contains the main code, runs continuously until the board is powered off or reset[^2] [^3] [^4].

### Example: Blink an LED

This classic example blinks the built-in LED on pin 13:

```cpp
void setup() {
  pinMode(13, OUTPUT); // Set pin 13 as output
}

void loop() {
  digitalWrite(13, HIGH); // Turn LED on
  delay(500);             // Wait 500 ms
  digitalWrite(13, LOW);  // Turn LED off
  delay(500);             // Wait 500 ms
}
```

- **pinMode(pin, mode):** Configures a pin as INPUT or OUTPUT.
- **digitalWrite(pin, value):** Sets a digital pin HIGH (on) or LOW (off).
- **delay(ms):** Pauses the program for a specified number of milliseconds[^1] [^2] [^3].

### Building Circuits

- Use a **breadboard** to prototype circuits without soldering.
- Connect components (LEDs, buttons, resistors) to Arduino pins using jumper wires[^1] [^3].

### Inputs and Outputs

- **Inputs:** Buttons, sensors, etc., send data to the Arduino.
- **Outputs:** LEDs, buzzers, motors, etc., are controlled by the Arduino[^1] [^3].

### Key Tips

- Comment your code using `//` for clarity; comments are ignored by the Arduino[^2].
- Use the **Serial Monitor** in the Arduino IDE for debugging and displaying data from your board[^1].

### Learning More

The Arduino ecosystem has extensive documentation and tutorials to help you progress from basic LED blinking to complex interactive projects[^5] [^6] [^7] [^8].

[^1]: https://core-electronics.com.au/courses/arduino-workshop-for-beginners/
[^2]: https://www.youtube.com/watch?v=FsJuSoDJVqk
[^3]: https://www.instructables.com/Beginner-Arduino/
[^4]: https://www.youtube.com/watch?v=BLrHTHUjPuw
[^5]: https://www.arduino.cc/en/Tutorial/HomePage/
[^6]: https://docs.arduino.cc/learn/starting-guide/getting-started-arduino
[^7]: https://docs.arduino.cc/learn/
[^8]: https://www.tutorialspoint.com/arduino/index.htm
[^9]: https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP
[^10]: https://www.youtube.com/watch?v=ZOllXMxLRqc
