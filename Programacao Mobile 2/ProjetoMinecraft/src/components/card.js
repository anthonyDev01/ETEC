import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get("window");

export function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.nome}</Text>
      <Image source={props.img} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#e9e9e9",
    height: width / 2.6,
    width: width * 0.8,
    marginHorizontal: 10,
    borderRadius: 12,

  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 12,
  },

  text: {
    position: "absolute",
    top: 90,
    left: 30,
    zIndex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5f5f5",
  }
});
