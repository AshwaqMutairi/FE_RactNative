import React from "react";
import { View, Text } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      //   initialRouteName="Home"
      initialRouteName="CartList"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "gray",
        },
        headerTitleStyle: {
          fontStyle: "italic",
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Welcome Shop App"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "gray",
          },
        }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => ({
          title: "choose a shop",
          headerRight: () => <CartButton />,
        })}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          return {
            title: route.params.shop.name,
          };
        }}
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default Navigation;
