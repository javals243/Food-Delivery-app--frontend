import { View, Image, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
interface SearchbarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: any | undefined;
  onTextChange: Function;
}
const SearchBar: React.FC<SearchbarProps> = ({
  onEndEditing,
  didTouch,
  autoFocus,
  onTextChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../images/search.png")}
        />
        <TextInput
          style={{
            marginLeft: 5,
            flex: 9,
            display: "flex",
            fontSize: 20,
            height: 42,
          }}
          placeholder={"Search Foods"}
          autoFocus={autoFocus}
          onTouchStart={didTouch}
          onChangeText={(text) => onTextChange(Text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBar: {
    display: "flex",
    height: 32,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ededed",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#E5E5E5",
    borderWidth: 2,
  },
});
export default SearchBar;
