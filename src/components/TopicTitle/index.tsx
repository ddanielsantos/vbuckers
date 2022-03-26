import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

type Props = {
  topic: string
}

export const TopicTitle = ({ topic }: Props) => {
  return (
    <Text style={styles.topicTitle} >
      {topic}
    </Text>
  )
}
