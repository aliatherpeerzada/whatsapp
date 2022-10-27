
import React from 'react'
import chats from "../screens/chats.json"
import { FlatList } from 'react-native'
import ContactListItem from '../components/ContactListItem'
const ContactsScreen = () => {
  return (
<FlatList

data={chats}
renderItem={({item})=><ContactListItem user={item.user} />} />
  )
}

export default ContactsScreen