import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import AppText from "../components/AppText";
import colors from "../config/colors";
import LottieView from "lottie-react-native";
function UploadScreen({ onDone, progress = 0, visible = false }) {
  <Modal visible={visible}>
    <View style={styles.container}>
      {progress < 1 ? (
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
      ) : (
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require("../assets/animations/done.json")}
          style={styles.animation}
        />
      )}
    </View>
  </Modal>;
  return;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  animation: {
    width: 150
  }
});
export default UploadScreen;
