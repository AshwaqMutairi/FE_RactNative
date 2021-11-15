import React from "react";
import { View, Text } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";

const navigation = () => {
    const (Navigator, Screen) = createStackNavigator();
    return (
        <Navigator initialRouteName="Home">
            <Screen name="Home" component={Home}/>
            <Screen name="ShopList" component={ShopList}/>
            {/* <Screen name="ShopDtail" component={ShopList}/> */}
        </Navigator>
    )
}