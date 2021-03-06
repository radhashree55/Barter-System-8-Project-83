import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AppStackNavigator } from "./AppStackNavigator";
import ExchangeScreen from "../screens/ExchangeScreen";

export const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/home.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
      tabBarLabel: "Exchange",
    },
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/exchange.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
      tabBarLabel: "Request",
    },
  },
});
