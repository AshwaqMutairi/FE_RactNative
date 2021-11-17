import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { baseURL } from "../stores/instance";
// import styles from "../../styles";

const ShopItem = ({ shop, navigation }) => {
  console.log(shop);
  return (
    <View>
      <Text onPress={() => navigation.navigate("ShopDetail", { shop: shop })}>
        {shop.name}
      </Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
