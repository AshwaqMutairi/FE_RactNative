import React from "react";
import {
  Box,
  Link,
  Center,
  Button,
  Text,
  NativeBaseProvider,
  View,
} from "native-base";

const Home = ({ navigation }) => {
  return (
    <View>
      {/* <Text>Home Page</Text> */}
      <Button onPress={() => navigation.navigate("ShopList")}>Shop List</Button>
    </View>
  );
};

export default Home;
