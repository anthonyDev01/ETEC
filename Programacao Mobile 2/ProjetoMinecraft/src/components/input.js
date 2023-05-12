import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function Input() {
  return (
    <TextInput style={styles.input} placeholder="Pesquisar">
      <FontAwesome name="search" size={20} color="#000" />
    </TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 12,
    borderWidth: 1,
  },
});
