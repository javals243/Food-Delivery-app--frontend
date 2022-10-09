import { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { connect } from "react-redux";
import { onUpdateLocation, UserState, ApplicationState } from "../redux";
import * as Location from "expo-location";
const widthScreen = Dimensions.get("screen").width;
interface LandingProps {
  userReducer: UserState;
  onUpdateLocation: Function;
}
export const _LandingPage: React.FC<LandingProps | any> = ({
  navigation,
  userReducer,
  onUpdateLocation,
}) => {
  const [location, setLocation] = useState<Location.LocationGeocodedAddress>();
  const [errorMsg, setErrorMsg] = useState("");
  const [displayAdress, setDisplayAdress] = useState("");
  let text: any = "Patienter...";
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location: any = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const { coords } = location;
      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        for (let item of addressResponse) {
          setLocation(item);
          onUpdateLocation(item);

          let currentAdress = `${item.country},${item.region},${item.city}`;

          if (errorMsg) {
            text = errorMsg;
          } else if (location) {
            text = setDisplayAdress(currentAdress);
          }

          if (currentAdress.length > 0) {
            setTimeout(() => {
              navigation.navigate("homeTabs");
            }, 2000);
          }
        }
      }
    })();
  }, []);

  return (
    <View style={style.Container}>
      <View style={style.Header}>
        <Text></Text>
      </View>
      <View style={style.Main}>
        <Image
          source={require("../images/logo.png")}
          style={style.deliveryIcon}
        />
        <View style={style.adressContainer}>
          <Text style={style.adressTitle}>Adresse de livraison</Text>
        </View>
        <Text style={style.addressText}>{text}</Text>
      </View>
      <View style={style.Footer}>
        <Text></Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return { userReducer: state.UserReducer };
};
const LandingPage = connect(mapStateToProps, { onUpdateLocation })(
  _LandingPage
);
export { LandingPage };

const style = StyleSheet.create({
  Header: {
    flex: 2,
    backgroundColor: "rgba(242,242,242,1)",
  },
  Container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
    borderRadius: 100,
    objectFit: "cover",
  },
  adressContainer: {
    width: widthScreen - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  Main: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  adressTitle: {
    fontSize: 24,
    color: "#707070",
    fontWeight: "700",
  },
  Footer: {
    flex: 1,
  },
  addressText: {
    color: "#4f4f4f",
    fontSize: 20,
    fontWeight: "200",
  },
});
