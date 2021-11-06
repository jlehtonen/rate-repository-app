import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    alignItems: "flex-start",
  },
  description: {
    marginTop: 5,
  },
  language: {
    padding: 5,
    backgroundColor: theme.colors.primary,
    color: "white",
    borderRadius: 4,
    marginTop: 8,
  },
});

const BasicInfoDisplay = ({ fullName, description, language }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading">
        {fullName}
      </Text>
      <Text color="textSecondary" style={styles.description}>
        {description}
      </Text>
      <Text style={styles.language}>{language}</Text>
    </View>
  );
};

export default BasicInfoDisplay;
