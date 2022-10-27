import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NotImplementedScreen from "../screens/NotImplementedScreen"
import ChatScreen from "../screens/ChatScreen";
import { Ionicons,Entypo } from '@expo/vector-icons'
import { Colors } from "react-native/Libraries/NewAppScreen";
const MainTabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator initialRouteName="Chats">
            <Tab.Screen name="Status" component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        (<Ionicons name="logo-whatsapp" color={color} size={size} />)
                }} />
            <Tab.Screen name="Calls" component={NotImplementedScreen} 
            options={{
                tabBarIcon:({ color,size })=>
            (<Ionicons name="call-outline" color={color} size={size} />)  
            }} />
            <Tab.Screen name="Camera" component={NotImplementedScreen} 
            options={{
                tabBarIcon:({ color,size })=>
            (<Ionicons name="camera-outline" color={color} size={size} />)  
            }}/>

            <Tab.Screen name="Chats" component={ChatScreen} 
            options={({navigation})=>({
                tabBarIcon:({ color,size })=>(<Ionicons name="ios-chatbubbles-sharp" color={color} size={size} />) ,
            headerRight:()=>(
                <Entypo name="new-message" 
                onPress={()=>navigation.navigate("Contacts")}
                size={18} 
                color={'royalblue'}
                style={{marginRight:15}}
                />
            )
 
            })}
            
            />
            <Tab.Screen name="Settings" component={NotImplementedScreen}
            options={{
                tabBarIcon:({ color,size })=>
            (<Ionicons name="settings-outline" color={color} size={size} />)  
            }} />

        </Tab.Navigator>
    )
}

export default MainTabNavigator