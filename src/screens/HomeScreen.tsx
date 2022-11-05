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
import { ButtonWithIcon, CategoryCard, RestaurantCard } from "../components";
import SearchBar from "../components/SearchBar";
import { ApplicationState, UserState } from "../redux";
import { onAvailability } from "../redux/Actions/ShoppingAction";
import { ShoppingState, Restaurant, FoodModel } from "../redux/Models/index";

interface LandingProps {
  userReducer: UserState;
  ShoppingReducer: ShoppingState;
  onAvailability: Function;
}
const _HomePage: React.FC<LandingProps | any> = (props) => {
  const { location } = props.userReducer;
  const { availability } = props.ShoppingReducer;
  const { categories, foods, restaurants } = availability;
  useEffect(() => {
    props.onAvailability(100);
  }, []);
  const onRestaurantTap = (item: Restaurant) => {
    props.navigation.navigate("restaurantPage", { restaurant: item });
  };
  const onTapFood = (item: FoodModel) => {
    props.navigation.navigate("foodDetail", { food: item });
  };
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
              props.navigation.navigate("searchPage");
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
            data={categories}
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                onTap={() => {
                  alert("categorie Taps");
                }}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
          <View>
            <Text
              style={{
                color: "#f15b5d",
                marginLeft: 20,
                fontWeight: "600",
                fontSize: 25,
              }}
            >
              Top Restaurant
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onRestaurantTap} />
            )}
            keyExtractor={(item) => `${item._id}`}
          />
          <View>
            <Text
              style={{
                color: "#f15b5d",
                marginLeft: 20,
                fontWeight: "600",
                fontSize: 25,
              }}
            >
              {" "}
              30 minutes Foods
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={foods}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onTapFood} />
            )}
            keyExtractor={(item) => `${item._id}`}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  ShoppingReducer: state.ShoppingReducer,
});

const HomePage = connect(mapToStateProps, { onAvailability })(_HomePage);

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
