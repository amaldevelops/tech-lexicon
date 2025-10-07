# duinotech-arduino-compatible-2-x-16-lcd-xc4454

- Use the Liquid Crystal Library `#include <LiquidCrystal.h>`
- Also to Get started quickly you can use `File->Examples->LiquidCrystal` and use the samples.
- To initalise the shield for use with the Liquid Crystal Library use the Liquid Crystal LCD (8,9,4,5,6,7); i.e. `const int rs = 8, en = 9, d4 = 4, d5 = 5, d6 = 6, d7 = 7;`

## Overview

- Comes with a built-in 16 character by 2 line LCD display
  with adjustable backlight, this six push button keypad
  allows you to create a user friendly interface for your
  project. The keypad consists of up, down, left, right,
  select and also a reset button. Perfect to use as a
  selection menu.
- Buttons are connected to Pin A0 through a resistor
  network, use analogueRead(A0) to find the values.
- Solder terminals on the digital side map to unused digital
  pins. In order from left to right:
  D13, D12, D11, D3, D2, D1, D0
