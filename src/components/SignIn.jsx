import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";

const styles = StyleSheet.create({
  formContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: "white",
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <View style={styles.button}>
          <Text fontWeight="bold" style={styles.buttonText}>
            Sign in
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    if (username && password) {
      console.log(`Username: ${username}, password: ${password}`);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
