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

## 🗃️ Project Structure - TBD

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


<img width="583" alt="Screenshot 2025-05-13 at 9 45 28 PM" src="https://github.com/user-attachments/assets/ffba897c-94f7-489c-85e7-78520aaaffaf" />



## Screenshots

<table>
   <thead>
      <tr>
         <td>Login screen</td>
         <td>Transaction History Screen</td>
         <td>Transaction Detail Screen</td>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <img width="320" alt="Screenshot 2025-05-13 at 9 45 28 PM" src="https://github.com/user-attachments/assets/880b7474-9844-4ce8-8b06-d83545354ebb" />
         </td>
           <td>
            <img width="320" alt="Screenshot 2025-05-13 at 9 45 28 PM" src="https://github.com/user-attachments/assets/6bc8bf2c-e333-4225-b0c2-78f295734d92" />
         </td>   
           <td>
            <img width="320" alt="Screenshot 2025-05-13 at 9 45 28 PM" src="https://github.com/user-attachments/assets/8a11f0db-0cae-421f-97dc-8b53fc5f74ce" />
         </td>   
      </tr>
   </tbody>
</table>

👷  TBD Screenshots & Demo

## What Next's

 **WIP**
- 👷  Loading Skeleton

#### Error Handling
- [ ] Authentication Error Handling
- [ ] Network Connection Error Toastbox

#### Testing 
- [ ] BDD Screen test


## Good to have

#### Animation Ideas
- Layout animation for transaction list in history screen ( Refer: [here](https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations) )
- Custom Pull to refresh ( Refer: [here](https://blog.cloudboost.io/building-a-custom-refresh-animation-in-react-native-using-reanimated-9b64212a0366) )

#### Feature Ideas
- Smart Filter
- Idle auto-loggedout warning popbox


## 🖌️ Design Inspiration
- https://dribbble.com/shots/21089666-Transaction-history
- https://dribbble.com/shots/25425152-Banking-App-Transaction-History-Light-Dark-Modes
- https://dribbble.com/shots/21089666-Transaction-history
