import React from "react";
import { StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarFg,
    margin: 15,
    marginRight: 0,
  },
});

const AppBarTab = ({ text, path }) => {
  return (
    <Link to={path}>
      <Text fontWeight="bold" style={styles.text}>
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
