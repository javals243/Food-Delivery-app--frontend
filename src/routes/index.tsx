import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "../screens/HomeScreen";
import { LandingPage } from "../screens";
import BottomTabNav from "./BotomTabNav";

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen component={LandingPage} name="langind" />
        <Root.Screen component={BottomTabNav} name="homeTabs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
