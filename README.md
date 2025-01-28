
# Install OneSignal
npx expo install onesignal-expo-plugin@2.0.2

npm i react-native-onesignal@5.0.5


# Expo Prebuild
npx expo prebuild

# Run build Android
npx expo run:android
# Run with expo
npx expo install expo-dev-client

# Add deep linking
npx expo prebuild
npx uri-scheme list
npx expo run:android

npx uri-scheme open igniteshoesapp://IP:PORT --android

npx uri-scheme open igniteshoesapp://details/7 --android