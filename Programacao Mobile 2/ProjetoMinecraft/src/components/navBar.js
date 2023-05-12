import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export function NavBar() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={24} color="black" />
      <MaterialCommunityIcons name="minecraft" size={24} color="black" />
      <FontAwesome name="gear" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
    width: width,
    borderTopWidth: 1,
    borderTopColor: "#000",
    position: "absolute",
    bottom: 12,
  },
});
