import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <RepositoryList />
    </View>
  );
};

export default Main;
