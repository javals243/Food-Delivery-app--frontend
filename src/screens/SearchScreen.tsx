import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SearchScreen: React.FC<any> = () => {
  return (
    <View style={Styles.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
});

export { SearchScreen };
