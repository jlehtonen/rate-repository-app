import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import Repository from "./Repository";

const Main = () => {
  return (
    <View style={{ display: "flex" }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/repositories/:id" exact element={<Repository />} />
      </Routes>
    </View>
  );
};

export default Main;
