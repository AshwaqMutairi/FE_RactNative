import React from "react";
import { baseURL } from "../stores/instance";
import { View, Text, Image } from "react-native";
import { HStack } from "native-base";

const ProductItem = ({ product }) => {
  return (
    <View>
      <HStack w="100%" alignItems="center" space="3">
        <Image
          source={{
            uri: baseURL + product.image,
          }}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
        <Text>{product.name}</Text>
      </HStack>
    </View>
  );
};

export default ProductItem;
