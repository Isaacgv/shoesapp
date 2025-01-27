import { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NotificationClickEvent, OneSignal } from "react-native-onesignal"
import { Routes } from './src/routes';

import { tagUserEmailCreate } from "./src/notifications/notificationsTags"

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

const oneSignalAppId = Platform.OS == "ios" ? "IOS_API_ID_ONESIGNAL" : "ANDROID_API_ID_ONESIGNAL"

OneSignal.initialize(oneSignalAppId)
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate("EMAIL")

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent): void =>{
      const { actionId } = event.result

      switch(actionId) {
        case "1":
          console.log("View all")
          break
        case "2":
          console.log("View commande")
          break
        default: 
          console.log("Not action button selected")
          break

      }
    }

    OneSignal.Notifications.addEventListener("click", handleNotificationClick)

    return () => OneSignal.Notifications.removeEventListener(
      "click", 
      handleNotificationClick)

  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}