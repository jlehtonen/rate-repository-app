import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarFg,
    margin: 15,
    marginRight: 0,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text fontWeight="bold" style={styles.text}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
