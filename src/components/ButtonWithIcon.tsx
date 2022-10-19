import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
interface ButtonProps {
  onTap: Function;
  width: number;
  height: number;
  icon: ImageSourcePropType;
}
const ButtonWithIcon: React.FC<ButtonProps> = ({
  onTap,
  width,
  height,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { width, height }]}
      onPress={() => onTap()}
    >
      <Image style={{ width: width - 2, height: height - 2 }} source={icon} />
    </TouchableOpacity>
  );
};

export { ButtonWithIcon };

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    width: 60,
    height: 40,
  },
});
