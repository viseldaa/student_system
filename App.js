import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "./src/components/screens/login";
import home from "./src/components/screens/home";
import resetpsw from "./src/components/screens/resetpsw";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="login" component={Login} options={{ title: "login" }} />
      <Stack.Screen
        name="resetpsw"
        component={Reset}
        options={({ title: "resetpsw" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="home"
        component={home}
        options={({ title: "home" }, { headerLeft: null })}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
