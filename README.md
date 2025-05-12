# Secure Transaction History Module 🔐

A Secure & User Friendly React Native app built with [Expo](https://expo.dev) that displays transaction history with biometric authentication. Sensitive data such as transaction amounts is masked and can only be revealed via Face ID or Fingerprint authentication.

## ✨ Features
- 🔐 Simple authentication system that allow users to login using device biometric (Face ID / Fingerprint)
- 📄 Transaction List Screen with pull-to-refresh to stimulate data reload, sensive information like amount is masked by default and to be revealed by device biometric authorization
- 📌 Transaction Detail Screen with full info
- ⚙️ Error Handling for auth, network, and UI
- 💅 Built with clean architecture and modular components
- ✅ Written in TypeScript with React Native + Expo Router

## 🧱 Tech Stack
- React Native (Expo)
- Expo Router
- TypeScript
- React Context API (Authorization)
- Biometric Auth via `expo-local-authentication`
- Persisted Auth Storage via `@react-native-async-storage/async-storage`
- Vector icons via `@expo/vector-icons`
- Network info via `@react-native-community/netinfo`
- Data fetching library via `@tanstack/react-query`
- Date utility library via `date-fns`
- Linear Gradient via `expo-linear-gradient`
- Testing via `jest` , `jest-expo`

## 

## Get Started

1. Clone the repo

   ``` bash
   git clone https://github.com/lowzijian/Secured-Transaction-History-Module.git
   cd Secured-Transaction-History-Module
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```
_Make sure your simulator or device supports biometric authentication._


## Testing

1. Run Command

   ```bash
   npm run test
   ```

## Sample Test Result

![Unit Testing](https://github.com/user-attachments/assets/2151ebba-350d-4b67-ba6e-16da25bbc3aa)



## What Next's

 **WIP**
- 👷 Investigate transaction list not working on Android ⚠️ , might consider changing to adopt SectionList
- 👷 Retest happy flow in Android 🤖

#### UI
- [ ] Loading Skeleton

#### Error Hnadling
- [ ] Authentication Error Handling
- [ ] Network Connection Error Toastbox

### Testing 
- [ ] BDD Screen test


## Good to have
- Layout animation
- Smart Filter
- Idle auto-loggedout warning popbox
  



## 🖌️ Design Inspiration
- https://dribbble.com/shots/21089666-Transaction-history
- https://dribbble.com/shots/25425152-Banking-App-Transaction-History-Light-Dark-Modes
- https://dribbble.com/shots/21089666-Transaction-history
