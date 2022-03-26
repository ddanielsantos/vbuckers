import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SkinsList } from './src/screens/SkinsList'
import { colors } from './src/theme'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Roboto_700Bold as RobotoBold,
  Roboto_300Light as RobotoLight,
  Roboto_500Medium as RobotoMedium
} from '@expo-google-fonts/roboto'
import {
  Quicksand_300Light as QuickLight,
  Quicksand_400Regular as QuickRegular,
  Quicksand_500Medium as QuickMedium,
  Quicksand_700Bold as QuickBold
} from '@expo-google-fonts/quicksand'

export default function App () {
  const [fontsLoaded] = useFonts({
    RobotoBold,
    RobotoMedium,
    RobotoLight,
    QuickLight,
    QuickMedium,
    QuickRegular,
    QuickBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='light' translucent={false} backgroundColor={colors.carbon1} />
      <SkinsList />
    </>
  )
}
