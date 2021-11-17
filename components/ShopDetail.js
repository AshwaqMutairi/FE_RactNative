import React from "react";
import shopStore from "../stores/shopStore";
import { StyleSheet, Text, View, Image } from "react-native";
import ProductList from "./ProductList";
import { Button, Spinner } from "native-base";
import { baseURL } from "../stores/instance";

const ShopDetail = ({ navigation, route }) => {
  if (shopStore.isLoading) return <Spinner />;
  const shop = route.params.shop;

  return (
    <View style={styles.shopDetailWrapper}>
      {/* <Text style={styles.title}>{shop.name}</Text> */}
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <Image source={{ uri: baseURL + shop.image }} style={styles.imageSize} />
      <ProductList products={shop.products} />
      <Button onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  shopDetailWrapper: {
    marginTop: 50,
  },
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  shopDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
  imageSize: {
    width: 50,
    height: 50,
  },
});

export default ShopDetail;
