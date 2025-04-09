import { View, Text, ImageBackground } from "react-native";

import backgroundImg from "../../assets/background.png";
import { Button } from "../../components/button";

export function Signin() {
  return (
    <ImageBackground
      source={backgroundImg}
      className="flex-1 bg-gray-800 items-center justify-center px-12"
    >
      <Text className="text-brand-light font-bold text-xxxl text-center mb-2">
        Ignite Fleet
      </Text>
      <Text className="text-gray-100 text-2xl font-regular text-center mb-12">
        Gestão do uso de veículos
      </Text>
      <View className="w-full">
        <Button title="Entrar com Google" />
      </View>
    </ImageBackground>
  );
}
