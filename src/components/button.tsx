import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { colors } from "../styles/colors";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

const Button = ({ title, isLoading = false, ...rest }: Props) => {
  return (
    <View className="flex-1 w-ful">
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={isLoading}
        className=" bg-brand-mid h-14 rounded-md items-center justify-center px-4"
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text className="text-white text-md font-bold">{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export { Button };
