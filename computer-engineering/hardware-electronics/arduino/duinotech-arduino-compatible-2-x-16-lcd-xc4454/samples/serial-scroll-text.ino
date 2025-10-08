#include <LiquidCrystal.h>

// LCD pin configuration
const int rs = 8, en = 9, d4 = 4, d5 = 5, d6 = 6, d7 = 7;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// Message line storage
String lines[20];  // Up to 20 lines (320 characters)
int totalLines = 0;
int scrollIndex = 0;

unsigned long lastScrollTime = 0;
const unsigned long scrollInterval = 1000; // Scroll every 1 second

bool messageReady = false;
bool scrolling = false;

void setup() {
  lcd.begin(16, 2);
  Serial.begin(9600);
  lcd.clear();
}

void loop() {
  // Check for new serial input
  if (Serial.available()) {
    delay(100); // Wait for complete message
    String message = "";

    // Read full message
    while (Serial.available()) {
      char c = Serial.read();
      message += c;
    }

    // Clear previous lines
    for (int i = 0; i < 20; i++) lines[i] = "";
    totalLines = 0;
    scrollIndex = 0;

    // Break message into 16-character lines
    for (int i = 0; i < message.length(); i += 16) {
      lines[totalLines++] = message.substring(i, i + 16);
      if (totalLines >= 20) break; // prevent overflow
    }

    messageReady = true;
    scrolling = true;
    lastScrollTime = millis();
  }

  // Scroll only if message is ready and still scrolling
  if (messageReady && scrolling && millis() - lastScrollTime >= scrollInterval) {
    lcd.clear();

    // Show top line (previous line or blank)
    lcd.setCursor(0, 0);
    if (scrollIndex == 0) {
      lcd.print("                "); // Blank top line
    } else {
      lcd.print(lines[scrollIndex - 1]);
    }

    // Show current line on bottom
    lcd.setCursor(0, 1);
    lcd.print(lines[scrollIndex]);

    scrollIndex++;

    // Stop scrolling after last line
    if (scrollIndex >= totalLines) {
      scrolling = false;
    }

    lastScrollTime = millis();
  }
}
