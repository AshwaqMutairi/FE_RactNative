import React from "react";
import ShopItem from "./ShopItem";
import { useState } from "react";
import shopStore from "../stores/shopStore";
// import { View } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";

function ShopList() {
  // const [query, setQuery] = useState("");

  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));

  return (
    <View>
      <Text> {shopList}</Text>
    </View>
  );
}

export default observer(ShopList);
const styles = StyleSheet.create({});
// export default observer(ShopList);
