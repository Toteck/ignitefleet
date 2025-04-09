import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

import backgroundImg from "../../assets/background.png";

export function Signin() {
  return (
    <ImageBackground
      source={backgroundImg}
      className="flex-1 bg-gray-800 items-center justify-center"
    >
      <Text className="text-brand-light font-bold text-xxxl text-center">
        Ignite Fleet
      </Text>
      <Text className="text-gray-100 text-2xl font-regular text-center mb-96">
        Gestão do uso de veículos
      </Text>
    </ImageBackground>
  );
}
