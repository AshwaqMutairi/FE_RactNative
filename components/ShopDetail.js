import React from "react";
import shopStore from "../stores/shopStore";

const ShopDetail = () => {
  const shop = shopStore.shops[0];

  return (
    <View style={styles.shopDetailWrapper}>
      <Image style={styles.shopDetailImage} source={{ uri: shop.image }} />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
    </View>
  );
};
export default ShopDetail;
