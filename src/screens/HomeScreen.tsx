import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { ButtonWithIcon, CategoryCard } from "../components";
import SearchBar from "../components/SearchBar";
import { ApplicationState, UserState } from "../redux";
import { onAvailibility } from "../redux/Actions/ShoppingAction";
import { ShoppingState, Restaurant } from "../redux/Models/index";

interface LandingProps {
  userReducer: UserState;
  ShoppingReducer: ShoppingState;
  onAvailibility: Function;
}
const _HomePage: React.FC<LandingProps | any> = ({
  userReducer,
  ShoppingReducer,
  onAvailibility,
  navigation,
}) => {
  const { location } = userReducer;
  const { Availability } = ShoppingReducer;
  const { categorie, foods, restaurant } = Availability;

  useEffect(() => {
    onAvailibility(location.postalCode);
  }, []);
  return (
    <View style={style.Container}>
      <View style={style.Header}>
        <View style={style.LocationText}>
          <Text>{`${location.region},${location.city}`}</Text>
          <Text>Edit</Text>
        </View>
        <View style={style.SearchBar}>
          <SearchBar
            didTouch={() => {
              navigation.navigate("searchPage");
            }}
            onTextChange={() => {}}
          />
          <ButtonWithIcon
            onTap={() => {}}
            icon={require("../images/hambar.png")}
            width={50}
            height={40}
          />
        </View>
      </View>
      <View style={style.Main}>
        <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categorie}
            renderItem={(item) => (
              <CategoryCard
                item={item}
                onTap={() => {
                  alert("categorie Taps");
                }}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </ScrollView>
      </View>
    </View>
  );
};
const mapStateToProps = (state: ApplicationState) => {
  return {
    userReducer: state.UserReducer,
    ShoppingReducer: state.ShoppingReducer,
  };
};
const HomePage = connect(mapStateToProps, { onAvailibility })(_HomePage);

export { HomePage };
const style = StyleSheet.create({
  Header: {
    flex: 2,
  },
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Main: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  LocationText: {
    paddingTop: 40,
    flex: 6,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  SearchBar: {
    display: "flex",
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
});
