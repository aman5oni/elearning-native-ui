import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Courses from "./src/screens/Courses";
import Xd from "./src/screens/Xd";
import VideoPage from "./src/screens/VideoPage";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Xd" component={Xd} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
