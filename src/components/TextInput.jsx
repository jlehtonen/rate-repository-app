import React from "react";
import { TextInput as NativeTextInput, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  containerError: {
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <View style={[styles.container, error && styles.containerError]}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;
