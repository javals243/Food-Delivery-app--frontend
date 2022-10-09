import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { ApplicationState, UserState } from "../redux";
import { onAvailibility } from "../redux/Actions/ShoppingAction";
import { ShoppingState, Restaurant } from "../redux/Models/index";

interface LandingProps {
  userReducer: UserState;
  ShoppingReducer: ShoppingState;
  onAvailibility: Function;
}
const _HomePage: React.FC<LandingProps> = (props) => {
  const { location } = props.userReducer;
  const { Availability } = props.ShoppingReducer;
  const { categorie, foods, restaurant } = Availability;

  useEffect(() => {
    props.onAvailibility(location.postalCode);
  }, []);
  return (
    <View style={style.Container}>
      <View style={style.Header}>
        <View style={style.LocationText}>
          <Text>{`${location.region},${location.city}`}</Text>
          <Text>Edit</Text>
        </View>
        <View style={style.SearchBar}>
          <Text>SearchBar</Text>
        </View>
      </View>
      <View style={style.Main}>
        <Text>Main</Text>
      </View>
      <View style={style.Footer}>
        <Text>Footer</Text>
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
    backgroundColor: "rgba(242,242,242,1)",
  },
  Container: {
    flex: 1,
    backgroundColor: "cyan",
  },
  Main: {
    flex: 9,
    backgroundColor: "red",
  },
  Footer: {
    flex: 1,
    backgroundColor: "yellow",
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
    flex: 8,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
