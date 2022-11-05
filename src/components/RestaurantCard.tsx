import { Dimensions, StyleSheet, Text, Image } from "react-native";
import React, { FC } from "react";
import { FoodModel, Restaurant } from "../redux/Models/index";
import { TouchableOpacity } from "react-native-gesture-handler";
interface RestaurantProps {
  item: Restaurant | FoodModel;
  onTap: Function;
}
const ScreenWidth = Dimensions.get("screen").width;
const RestaurantCard: FC<RestaurantProps> = ({ item, onTap }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image
        style={{
          width: ScreenWidth - 20,
          height: 220,
          backgroundColor: "#EAEAEA",
          borderRadius: 20,
        }}
        source={{ uri: `${item.images[0]}` }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth - 20,
    height: 230,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
  },
});

export { RestaurantCard };
