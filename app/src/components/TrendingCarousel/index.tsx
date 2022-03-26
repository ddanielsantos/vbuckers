import React, { useRef, useState } from 'react'
import { Animated, View, useWindowDimensions } from 'react-native'

import data from '../../../mock-trending.json'
import { PriceOfTrendingSkin } from '../PriceOfTrendingSkin'
import { TrendingSkinCard } from '../TrendingSkinCard'

export type TrendingSkin = {
  id: number,
  name: string,
  rating: number,
  price: number,
  release_date: string,
  type: string,
  availability: string,
  image_url: string
}

type Dummy = {
  key: string
}

type CarouselElement = TrendingSkin | Dummy

export const TrendingCarousel = () => {
  const WINDOW_WIDTH = useWindowDimensions().width
  const HALF_WINDOW_HEIGHT = useWindowDimensions().height / 2
  const CARD_WIDTH = WINDOW_WIDTH * 0.60
  const DUMMY_WIDTH = (WINDOW_WIDTH - CARD_WIDTH) / 2

  // useRef doenst cause re-rendering, so we can use it
  // to store the value of the previous scroll position
  // without having to re-render the component
  const scrollX = useRef(new Animated.Value(0)).current

  // this logic is used to make sure that the card
  // is always in the middle of the screen
  const [carouselItems] = useState<CarouselElement[]>([{ key: 'left-dummy' }, ...data, { key: 'right-dummy' }])

  return (
    <View>

      <Animated.FlatList
        data={carouselItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX }
                }
              }
            ],
            {
              useNativeDriver: true
            }
          )
        }
        scrollEventThrottle={16}
        snapToInterval={CARD_WIDTH}
        decelerationRate={0}
        keyExtractor={(i) => 'key' in i ? i.key : String(i.id)}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * CARD_WIDTH,
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH
          ]
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [
              0.3, 1, 0.3
            ]
          })

          return (
            <View
              key={'key' in item ? item.key : String(item.id)}
              style={{
                // to use the image outside of the div and still use padding i needed to involve the image
                // with another View and then move the stylings i used here to there
                width: 'key' in item ? DUMMY_WIDTH : CARD_WIDTH
              }}
            >
              {
                // short circuit with ampersand operator
                !('key' in item) &&
                <>
                  <TrendingSkinCard
                    image_url={item.image_url}
                    name={item.name}
                    rating={item.rating}
                    price={item.price}
                    opacity={opacity}
                    width={CARD_WIDTH}
                    height={HALF_WINDOW_HEIGHT}
                  />
                  <PriceOfTrendingSkin price={item.price} />
                </>
              }
            </View>
          )
        }}
      />
    </View>
  )
}
