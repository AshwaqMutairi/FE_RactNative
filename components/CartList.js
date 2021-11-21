import React from "react";
import { Center, VStack } from "native-base";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import { Text, View } from "react-native";

const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} /> //navigation={navigation}
  ));
  return (
    <Center>
      <VStack space="5">{cartList}</VStack>
    </Center>
    // <View>
    //   <VStack space="5">{cartList}</VStack>
    //   {/* <Text>{cartList}</Text> */}
    // </View>
  );
};

export default CartList;
