import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../theme'
import { TrendingSkin } from '../TrendingCarousel'

type Props = {
  price: TrendingSkin['price']
}

export const PriceOfTrendingSkin = (props: Props) => {
  return (
    <View
      style={{
        alignSelf: 'center'
      }}
    >
      <Text
        style={{
          fontFamily: 'QuickBold',
          color: colors.blue1,
          fontSize: 24
        }}
      >
        Price
      </Text>

      <Text
        style={{
          fontFamily: 'QuickMedium',
          color: colors.white1,
          textAlign: 'center'
        }}
      >
        {props.price}
      </Text>
    </View>
  )
}
