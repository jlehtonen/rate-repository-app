import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import SignIn from "./SignIn";

const Main = () => {
  return (
    <View style={{ display: "flex" }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/sign-in" exact element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
