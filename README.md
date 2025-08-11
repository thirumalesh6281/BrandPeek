BrandPeek - React Native Mini Brand Discovery App
Overview
BrandPeek is a small, polished React Native app built with Expo to simulate a brand discovery experience.
The app fetches brand data from a backend API and displays it in a clean, modern UI with gradient backgrounds.


Features
Home Screen:

Gradient background

Displays a list of 5–10 top brands (name, logo, short description) fetched from MockAPI

Tap on a brand to navigate to Brand Detail screen

Brand Detail Screen:

Shows full brand details

Includes a "Follow" button (UI only)

Subtle gradient background

Folder Structure:

/assets       # Images and icons  
/components   # Reusable UI components  
/screens      # App screens (HomeScreen, BrandDetails)  
/navigation   # Navigation setup (React Navigation)  
/services     # API calls and backend services  
/constants   # App-wide constants (colors, fonts)  
/utils        # Utility functions  
App.js       # Entry point  


Backend
Data fetched from MockAPI:
https://6898cfa1ddf05523e55fe215.mockapi.io/brandpeek-api/brands/brands

Setup & Run

1.Clone the repo

2.Run npm install or yarn install

3.Start the app with expo start

4.Use Expo Go app to scan the QR code and run on your device or run on Android/iOS simulators

Notes:
- Used expo-linear-gradient for creative gradient backgrounds

- API integration with error handling

- Clean, minimal UI focused on spacing, font sizes, and padding

- Navigation implemented using React Navigation


Live Demo
[Expo Go QR Code / Link] 

- Link - http://localhost:8081

- Expo Go QR Code:

                  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
                  █ ▄▄▄▄▄ █▀▀ ██    █ ▄▄▄▄▄ █
                  █ █   █ █▄▀██▀██▀ █ █   █ █
                  █ █▄▄▄█ █ ▄ █  ▀ ██ █▄▄▄█ █
                  █▄▄▄▄▄▄▄█ █ ▀▄█ █ █▄▄▄▄▄▄▄█
                  █▄▄▀ █▀▄▄▀▀█   ▀██▀  ▄▀▄▄▀█
                  █▀▀██▄▀▄▀▀▀▀   ▀██▄▀ ▀▀█▄▄█
                  ██▀▀▀▄▄▄  ▀▄ ▄▄ █▀█ ▄█ ██▀█
                  █▄▀▄▄█▀▄▀▀█▀ █  █ ▄▄ ▀▀██▄█
                  █▄▄██▄▄▄▄ ▀█▀██▄  ▄▄▄ █ ▄ █
                  █ ▄▄▄▄▄ █▄▄▄▀▄▄▄  █▄█  ▀  █
                  █ █   █ █▀▀ ██▄▀▀▄ ▄▄ █▀▄██
                  █ █▄▄▄█ █▀▄ █▄  █  █▄  ▄█▄█
                  █▄▄▄▄▄▄▄█▄█▄██▄▄█▄███▄▄█▄▄█
