import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants"; // for android

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
});
export default Screen;
