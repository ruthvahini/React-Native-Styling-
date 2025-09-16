import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostListScreen from "./screens/PostListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Posts" 
          component={PostListScreen} 
          options={{ title: "Posts Layout" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
