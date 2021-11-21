import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { user } = useAuthorizedUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" path="/" />
        {user ? (
          <>
            <AppBarTab text="Create a review" path="/review" />
            <AppBarTab text="My reviews" path="/my-reviews" />
            <AppBarTab text="Sign out" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab text="Sign in" path="/sign-in" />
            <AppBarTab text="Sign up" path="/sign-up" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
