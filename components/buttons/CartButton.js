import { Button } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const CartButton = ({ navigation }) => {
  //   const navigation = useNavigation();
  return (
    <Icon
      size={30}
      onPress={() => navigation.navigate("CartList")}
      name="cart"
      color="pink"
      marginRight="30"
    />
  );
};

export default CartButton;
