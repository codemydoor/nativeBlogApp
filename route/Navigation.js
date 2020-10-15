import React from "react";
import { Text, View , StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Blogs from "../component/Blogs";
import SinglePost from "../component/SinglePost";
import MainBlogs from "../component/MainBlogs";
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#7B7B7B",
              height: 120,
            },
            title: "BLOGGER",

            headerTitleStyle: {
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            },
            headerLeft:()=>{
              return (
                <View>
                    <FontAwesome style={styles.leftIcon} name="th" size={23} color="white" />

              </View>

              )

            },
            headerRight:()=>{
              return (
                <View>
                    <Octicons  style={styles.rightIcon} name="search" size={23} color="white" />

              </View>
              )
            },
          }}
          
          name="Blogs"
          component={Blogs}
        />
        <Stack.Screen
          options={{
            headerTitle: "DAILY BLOGS",
            headerStyle: {
              height: 120,
            },
            
            headerTitleStyle: {
              fontWeight: "bold",
              color: "black",
              marginRight:200
            },
            headerRight:()=>{
              return(
                <View style={styles.blogHeaderIcon}>
                  <Feather   style={styles.headphone} name="headphones" size={24} color="black" />
                  <AntDesign style={styles.heart}name="hearto" size={24} color="black" />
                  <AntDesign style={styles.share} name="sharealt" size={24} color="black" />
                </View>
              )
            },
            headerBackTitleVisible:false
          }}
          name="MainBlogs"
          component={MainBlogs}
        />
        <Stack.Screen name="SinglePost" component={SinglePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;

const styles=StyleSheet.create({
  leftIcon:{
    paddingLeft: 20,
    
  },
  rightIcon:{
   marginHorizontal: 30
  },
  blogHeaderIcon:{
    flexDirection:"row",
    flex: 10,
    marginVertical:25,
    marginHorizontal: 40,
  },
  headphone:{
    marginRight: 20
  },
  heart:{
    marginRight: 20
  },
})