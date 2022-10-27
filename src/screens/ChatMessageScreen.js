import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import messages from './messages.json'
import React,{useEffect} from 'react'
import bg from '../../assets/images/BG.png'
import Message from '../components/Message'
import InputBox from '../components/InputBox'
const ChatMessageScreen = () => {
   const route=useRoute();
const navigation=useNavigation();
useEffect(()=>{navigation.setOptions({title:route.params.name})},[route.params.name])


return (

<KeyboardAvoidingView 
keyboardVerticalOffset={Platform.OS==='ios'?60:120}
behavior={'Platform.OS==="ios"?"padding":"height"'}
style={styles.bg}> 
       <ImageBackground source={bg} style={styles.bg}>

            <FlatList data={messages} style={styles.list}
                inverted
                renderItem={({ item }) => <Message message={item} />} />
            <InputBox />
        </ImageBackground>
        </KeyboardAvoidingView>
   )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10
    }
})
export default ChatMessageScreen