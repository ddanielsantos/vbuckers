import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

type Props = {
  screen: string
}

export const ScreenTitle = ({ screen }: Props) => {
  return (
    <Text style={styles.header}>
      {screen}
    </Text>
  )
}
