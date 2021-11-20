import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
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
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

const Button = ({ label, onPress, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
