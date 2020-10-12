import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Blogs from "../component/Blogs";
import SinglePost from "../component/SinglePost";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="SinglePost" component={SinglePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;