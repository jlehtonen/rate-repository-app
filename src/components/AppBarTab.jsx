import React from "react";
import { Pressable, StyleSheet } from "react-native";
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

const TabText = ({ text }) => {
  return (
    <Text fontWeight="bold" style={styles.text}>
      {text}
    </Text>
  );
};

const AppBarTab = ({ text, path, onPress }) => {
  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <TabText text={text} />
      </Pressable>
    );
  }

  return (
    <Link to={path}>
      <TabText text={text} />
    </Link>
  );
};

export default AppBarTab;
