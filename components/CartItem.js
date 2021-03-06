import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Center, HStack, VStack, Box, Avatar } from "native-base";
import { baseURL } from "../stores/instance";
import NumericInput from "react-native-numeric-input";

const CartItem = ({ item }) => {
  const product = item.product;
  return (
    <Box pl="4" pr="5" py="2">
      <HStack alignItems="center" space={3}>
        <Avatar
          size="48px"
          source={{
            uri: baseURL + item.product.image,
          }}
        />
        <Text color="red" bold>
          {item.product.name}
        </Text>

        <VStack>
          <Text>
            {item.product.price} x {item.quantity} items
          </Text>
          <Text>total: {item.quantity * item.product.price} KD</Text>
        </VStack>

        <NumericInput
          rounded
          totalHeight={30}
          totalWidth={60}
          initValue={1}
          minValue={1}
          maxValue={100}
          iconSize={40}
        />
      </HStack>
    </Box>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
