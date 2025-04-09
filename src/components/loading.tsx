import { View, Text, ActivityIndicator } from "react-native";
import { colors } from "../styles/colors";
const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator color={colors.brand.light} />
    </View>
  );
};

export { Loading };
