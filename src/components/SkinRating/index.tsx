import React from 'react'
import { View, Platform } from 'react-native'
import Star from '../../assets/Star.svg'
import { TrendingSkin } from '../TrendingCarousel'

type Props = Pick<TrendingSkin, 'rating' | 'name'>

export const SkinRating = (props: Props) => {
  return (
    <View
      style={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {
        // there's a problem using SVGs in RNWeb, i dont know how to fix so i used this
        (Platform.OS !== 'web') &&
        [...Array(props.rating)].map((_i, index) => <Star key={props.name + index + 'star'} width={24} height={24} />)
      }
    </View>
  )
}
