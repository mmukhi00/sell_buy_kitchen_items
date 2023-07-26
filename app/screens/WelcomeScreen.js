import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.buttonsContainer}>
        <AppButton
          title="LOGIN"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="REGISTER"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 5
  },
  registerButton: {
    width: "100%",
    height: 70,
    // backgroundColor: "#BF9972"
    backgroundColor: colors.secondary
  }
});
