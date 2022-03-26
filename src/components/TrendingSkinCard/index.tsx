import React from 'react'
import { Animated, View, Image, Text, useWindowDimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../../theme'
import { SkinRating } from '../SkinRating'
import { TrendingSkin } from '../TrendingCarousel'

type Props = Pick<TrendingSkin, 'image_url' | 'name' | 'rating' | 'price'> & {
  width: number,
  height: number,
  opacity: Animated.AnimatedInterpolation
}

export const TrendingSkinCard = (props: Props) => {
  // similar to dimensions width but dynamic
  const WINDOW_WIDTH = useWindowDimensions().width
  // media query for the width of the card
  const BORDER_RADIUS = WINDOW_WIDTH < 505 ? 20 : 32

  return (
    <Animated.View
      // this is the aforementioned View
      style={{
        width: props.width,
        // borderWidth: 1,
        // borderColor: 'red',
        opacity: props.opacity,
        borderRadius: BORDER_RADIUS
      }}
    >

      <View style={{
        width: '85%',
        height: '75%',
        backgroundColor: colors.carbon3,
        borderRadius: 32,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
      }}
      />

      <Image
        source={{ uri: props.image_url }}
        style={{
          width: '100%',
          height: 300,
          marginTop: 35,
          resizeMode: WINDOW_WIDTH < 505 ? 'cover' : 'center',
          alignSelf: 'center'
        }}
      />

      <LinearGradient
        colors={[colors.carbon2 + '9F', colors.carbon3]}
        style={{
          width: '85%',
          borderBottomRightRadius: BORDER_RADIUS,
          borderBottomLeftRadius: BORDER_RADIUS,
          paddingVertical: 10,
          position: 'absolute',
          alignSelf: 'center',
          bottom: 0
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: colors.white1,
            fontFamily: 'QuickMedium',
            fontSize: WINDOW_WIDTH < 768 ? 22 : 30
          }}
        >
          {props.name}
        </Text>

        <SkinRating name={props.name} rating={props.rating} />
      </LinearGradient>
    </Animated.View >
  )
}
