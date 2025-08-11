🚀 BrandPeek
React Native Mini Brand Discovery App 📱✨

🔍 Overview
BrandPeek is a small, polished React Native app built with Expo that simulates a brand discovery experience. The app fetches brand data from a backend API and displays it with a clean, modern UI featuring creative gradient backgrounds. 🎨🌈

⭐ Features
Home Screen:

🌈 Gradient background

📋 Displays a list of 5–10 top brands (name, logo, short description) fetched from MockAPI

👉 Tap on a brand to navigate to Brand Detail screen

Brand Detail Screen:

📝 Shows full brand details

❤️ Includes a "Follow" button (UI only)

🌟 Subtle gradient background

📁 Folder Structure

      /assets         # 🖼 Images and icons
      /components     # 🔄 Reusable UI components
      /screens        # 🖥 App screens (HomeScreen, BrandDetails)
      /navigation     # 🧭 Navigation setup (React Navigation)
      /services      # 🔌 API calls and backend services
      /constants     # 🎨 App-wide constants (colors, fonts)
      /utils         # 🛠 Utility functions
      App.js         # 🚪 Entry point


🌐 Backend API
Data fetched from MockAPI:

🔗 https://6898cfa1ddf05523e55fe215.mockapi.io/brandpeek-api/brands/brands

⚙️ Setup & Run
1 . Clone the repo

   git clone https://github.com/thirumalesh6281/BrandPeek.git
   cd BrandPeek

2 . Install dependencies


   npm install
   # or
   yarn install

3 . Start the app

   expo start

4 . Use the Expo Go app to scan the QR code and run on your physical device or use Android/iOS simulators. 📱💻

📦 Building and Publishing (EAS Build)
To generate standalone app binaries for Android and iOS, use EAS build:

1.Log in to EAS:

eas login


2.Configure your project (if not done):

eas project:init

3.Build Android APK:

eas build --platform android

4.Build iOS app (requires Apple Developer account):

eas build --platform ios

Track your build progress at:

🌐 https://expo.dev/accounts/thirumalalesh/projects/BrandPeek/builds

Download and share your builds. 📲🎉

📝 Notes
Used expo-linear-gradient for creative gradient backgrounds 🌈

API integration with error handling ⚠️

Clean, minimal UI focused on spacing, font sizes, and padding 🧹

Navigation implemented using React Navigation 🧭

Updates can be pushed OTA with eas update 🚀

📱 Live Demo
Scan the QR code generated after expo start or open the project via Expo Go app:

Or visit your project page on Expo:

🔗 https://expo.dev/accounts/thirumalalesh/projects/BrandPeek

📂 GitHub Repository
🔗 https://github.com/thirumalesh6281/BrandPeek.git
