import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import color from "../config/colors";
import ListItems from "../components/ListItems";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.infoContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItems
            image={require("../assets/logo.png")}
            title="Mahima"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  price: {
    color: color.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  userContainer: {
    marginVertical: 50
  }
});

export default ListingDetailsScreen;
