import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsConatiner}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginTop: 20
  },
  detailsConatiner: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 10
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  },
  title: {
    marginBottom: 7
  }
});
export default Card;
