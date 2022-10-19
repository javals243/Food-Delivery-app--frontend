import { StyleSheet, Text, Image, View } from "react-native";
import React, { FC } from "react";
import { Category } from "../redux";
import { TouchableOpacity } from "react-native-gesture-handler";
interface CategoryProps {
  item: Category;
  onTap: Function;
}
const CategoryCard: FC<CategoryProps | any> = ({ item, onTap }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image
        style={{
          width: 120,
          height: 120,
          borderRadius: 20,
          backgroundColor: "#EAEAEA",
        }}
        source={{ uri: `${item.icon}` }}
      />
      <Text style={{ fontSize: 14, marginTop: 18, color: "#858585" }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export { CategoryCard };

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 140,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
  },
});
