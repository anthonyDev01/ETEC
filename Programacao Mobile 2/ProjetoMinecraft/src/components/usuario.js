import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export function Usuario() {
  return (
    <View style={styles.container}>
      <Text style={styles.perfilText}>Bem-vindo, Steve</Text>
      <Image
        style={styles.perfilImage}
        source={require("../../assets/images/perfil.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },

  perfilImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: "cover",
  },

  perfilText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
