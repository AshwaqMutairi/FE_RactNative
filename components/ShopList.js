import React from "react";
import ShopItem from "./ShopItem";
import shopStore from "../stores/shopStore";
import { StyleSheet, View, Text } from "react-native";
import { observer } from "mobx-react";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} navigation={navigation} key={shop._id} />
  ));

  return <View>{shopList}</View>;
};

export default observer(ShopList);
const styles = StyleSheet.create({});
