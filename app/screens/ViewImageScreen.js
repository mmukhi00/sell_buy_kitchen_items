import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcons}>
        <MaterialCommunityIcons name="close" size={30} />
      </View>
      <View style={styles.deleteIcons}>
        <MaterialCommunityIcons name="trash-can-outline" size={30} />
      </View>
      <Image
        //   resizeMethod="contain"
        style={styles.image}
        source={require("../assets/jars.jpg")}
      ></Image>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcons: {
    position: "absolute",
    top: 80,
    left: 30
  },
  deleteIcons: {
    position: "absolute",
    top: 80,
    right: 30
  },
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  image: {
    // flex: 1,
    width: "100%",
    height: "70%"
  }
});
