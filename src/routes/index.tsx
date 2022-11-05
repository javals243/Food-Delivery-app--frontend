import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingPage, SearchScreen } from "../screens";
import BottomTabNav from "./BotomTabNav";
import { FoodDetailScreen } from "../screens/FoodDetalScreen";
import { RestaurantScreen } from "../screens/RestaurantScreen";

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen component={LandingPage} name="langind" />
        <Root.Screen component={BottomTabNav} name="homeTabs" />
        <Root.Screen component={SearchScreen} name="searchPage" />
        <Root.Screen component={RestaurantScreen} name="restaurantPage" />
        <Root.Screen component={FoodDetailScreen} name="foodDetail" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
