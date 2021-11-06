import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const Avatar = ({ url }) => {
  return <Image style={styles.avatar} source={{ uri: url }} />;
};

export default Avatar;
