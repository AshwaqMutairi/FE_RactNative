import ShopItem from "./ShopItem";
import { useState } from "react";
import shopStore from "../stores/shopStore";
import { View } from "native-base";

function ShopList() {
  const [query, setQuery] = useState("");

  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));

  return <View>{shopList}</View>;
}

export default ShopList;
const styles = StyleSheet.create({});
// export default observer(ShopList);
