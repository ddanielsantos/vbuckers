import React from 'react'
import { View } from 'react-native'
import { SearchBar } from '../../components/SearchBar'
import { TrendingCarousel } from '../../components/TrendingCarousel'
import { styles } from './style'
import { TopicTitle } from '../../components/TopicTitle'
import { ScreenTitle } from '../../components/ScreenTitle'

export const SkinsList = () => {
  return (
    <View style={styles.container} >
      <ScreenTitle screen='Skins List' />

      <SearchBar />

      <TopicTitle topic='Trending Skins' />

      <TrendingCarousel />
    </View>
  )
}
