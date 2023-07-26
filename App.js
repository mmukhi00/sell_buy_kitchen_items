import React from "react";
import { Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  const Link = () => {
    const navigation = useNavigation();
    return (
      <Button
        title="click"
        onPress={() =>
          navigation.navigate("TweetsDetails", { id: 1, name: "Details" })
        }
      />
    );
  };
  const Tweets = () => (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );

  const TweetsDetails = ({ route }) => (
    <Screen>
      <Text>Tweets Details {route.params.id}</Text>
    </Screen>
  );
  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "White",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black"
      }}
    >
      <Tab.Screen
        name="Feed"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Account" component={Account} options={{}} />
    </Tab.Navigator>
  );
  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white"
      }}
    >
      <Stack.Screen
        name="Tweet"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: true
        }}
      />
      <Stack.Screen
        name="TweetsDetails"
        component={TweetsDetails}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
