import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* <Button style={{ borderRadius: "50%", width: 40, height: 40 }}> */}
      <Icon
        style={{ color: "pink", marginRight: 30 }}
        size={30}
        name="cart"
        onPress={() => navigation.navigate("CartList")}
      />
      {/* </Button> */}
    </View>
  );
};

export default CartButton;
