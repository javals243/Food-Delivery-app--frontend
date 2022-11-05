import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HomePage } from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import ShoppingSreen from "../screens/ShoppingSreen";
import OfferScreen from "../screens/OfferScreen";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
    
        tabBarInactiveTintColor: "#ffbd7d",
        tabBarActiveTintColor: "#e47911",
      }}
    >
      <Tab.Screen
        component={HomePage}
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        component={ShoppingSreen}
        name="shoppingCart"
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={OfferScreen}
        name="more"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="offer" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={AccountScreen}
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
