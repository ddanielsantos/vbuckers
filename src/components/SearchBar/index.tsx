import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { colors } from '../../theme'
import { SimpleLineIcons } from '@expo/vector-icons'

export const SearchBar = () => {
  const [userInput, setUserInput] = useState<string>('')

  return (
    <View
      style={{
        margin: 20,
        borderRadius: 10,
        paddingHorizontal: 7,
        backgroundColor: colors.carbon2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <SimpleLineIcons name='magnifier' color={'white'} size={20} style={{ padding: 7, transform: [{ rotate: '90deg' }] }} />

      <TextInput
        value={userInput}
        placeholder={'Search'}
        placeholderTextColor={colors.white1}
        onChangeText={(newText) => setUserInput(newText)}
        selectionColor={colors.white1}
        style={{
          padding: 7,
          flex: 1,
          color: colors.white1,
          fontFamily: 'QuickLight'
        }}
      />

      <SimpleLineIcons name='microphone' color={'white'} size={20} style={{ padding: 7 }} />
    </View>

  )
}
