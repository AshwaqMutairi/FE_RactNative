import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { baseURL } from "../stores/instance";

const ShopItem = ({ shop }) => {
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
