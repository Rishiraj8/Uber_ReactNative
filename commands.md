roject Setup Guide: Emulator & NativeWind

1. Android Emulator Management
   Commands to find and launch specific virtual devices.

List all available Emulators
Run this in your terminal to see the "Internal Names" (AVDs):

PowerShell

emulator -list-avds
(Example Output: Pixel_9a, Medium_Phone)

Run a Specific Emulator
Option A: Manual Command (Windows)

PowerShell

start emulator -avd Pixel_9a
Option B: package.json Script (Recommended) Add this to your package.json under "scripts" to launch the emulator and app with one command:

JSON

"android:pixel9a": "start emulator -avd Pixel_9a && expo start --android"
Usage: npm run android:pixel9a

see the native wind instllation properly okay
https://www.nativewind.dev/docs/getting-started/installation

package for safe area context
npx expo install react-native-safe-area-context
