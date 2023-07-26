import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import * as Yup from "yup";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

// define outside the function to prevent from rerendering
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password"),
  username: Yup.string()
    .required()
    .label("UserName")
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={value => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="User Name"
          textContentType="username"
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: "center"
  }
});
export default RegisterScreen;
