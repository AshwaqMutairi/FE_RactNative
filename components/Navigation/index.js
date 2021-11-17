import React from "react";
import { View, Text } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
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
          title: "Shops",
          //   headerRight: () => <Settings navigation={navigation} />,
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
    </Navigator>
  );
};

export default Navigation;
