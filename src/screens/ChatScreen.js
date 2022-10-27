import React from 'react'

import { FlatList } from 'react-native'
import ChatListItem from '../components/ChatListItem'
import chats from './chats.json'
const ChatScreen = () => {
  return (
<FlatList

data={chats}
renderItem={({item})=><ChatListItem chat={item} />} />
   )
}

export default ChatScreen