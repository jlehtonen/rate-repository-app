import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

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
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="sign-in-username"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        testID="sign-in-password"
      />
      <Pressable onPress={onSubmit} testID="sign-in-button">
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

export const SignInContainer = ({ onSubmit }) => {
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

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn(username, password);
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
  // return (
  //   <View style={styles.formContainer}>
  //     <Formik
  //       initialValues={initialValues}
  //       onSubmit={onSubmit}
  //       validationSchema={validationSchema}
  //     >
  //       {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
  //     </Formik>
  //   </View>
  // );
};

export default SignIn;
