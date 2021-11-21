import React from "react";
import { View, Text, VStack, HStack } from "native-base";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));

  return (
    <View>
      <VStack marginLeft="10" space={10}>
        <Text marginLeft="100" bold color="gray.400">
          products
        </Text>
        {productList}
      </VStack>
    </View>
  );
};

export default ProductList;
