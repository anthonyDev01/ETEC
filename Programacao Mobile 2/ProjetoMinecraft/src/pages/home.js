import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Usuario } from "../components/usuario";
import { Input } from "../components/input";
import { Cards } from "../components/cards";
import { NavBar } from "../components/navBar";
import { Banner } from "../components/banner";

export function Home() {
  const data = [
    {
      id: 1,
      nome: "Voliber",
      img: require("../../assets/images/animal1.png"),
    },
    {
      id: 2,
      nome: "Thomas Tubando",
      img: require("../../assets/images/animal2.png"),
    },
    {
      id: 3,
      nome: "Perna Curta",
      img: require("../../assets/images/animal3.png"),
    },
    {
      id: 4,
      nome: "Cachorro Chupetao?",
      img: require("../../assets/images/animal4.jpg"),
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <Usuario />
        <Input />
        <Text style={styles.titleAnimais}>Seus Animais</Text>
        <Cards data={data} />
        <Banner />
        <NavBar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  titleAnimais: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 40,
  },

  navbar: {
    marginBottom: 89,
  },
});
