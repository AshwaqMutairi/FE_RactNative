import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { extendTheme } from "native-base";
import Navigation from "./components/Navigation";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
