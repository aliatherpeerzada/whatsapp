import { View, Text, Image, StyleSheet ,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ContactListItem = ({user}) => {
  const navigation=useNavigation();  
  return (
        <Pressable 
        onPress={()=>navigation.navigate('Chat',{id:user.id,name:user.name})}
        style={styles.container}>
            <Image style={styles.image}
                source={{ uri: user.image }}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
             
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>{user.status}</Text>
            </View>

        </Pressable>
    )
}
const styles=StyleSheet.create({
 container:{
flexDirection:'row',
marginHorizontal:10,
marginVertical:5,
height:70,

}, image:{
    width:60,
    height:60,
    borderRadius:30,
    marginRight:10
  } ,
  content:{
    flex:1,
    borderBottomColor:'lightgray',
    borderBottomWidth:StyleSheet.hairlineWidth
  },
  row:{
    flexDirection:'row',
 marginBottom:5,
  },
  name:{
    flex:1,
    fontWeight:'bold'
  },
  subTitle:{
    color:'grey'
  },
})
export default ContactListItem