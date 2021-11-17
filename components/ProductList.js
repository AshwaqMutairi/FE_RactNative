import React from "react";
import { View, Text } from "native-base";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));

  return (
    <View>
      <Text>This is the shops list</Text>
      {productList}
    </View>
  );
};

export default ProductList;
