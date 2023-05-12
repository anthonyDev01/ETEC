import React from "react";
import { View, StyleSheet, Image, Dimensions, Text} from "react-native";

const {width} = Dimensions.get("window")

export function Banner() {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>Comece sua Aventura</Text>
      <Image
        style={styles.banner}
        source={require("../../assets/images/banner.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    borderRadius: 12,
    height: width / 2.6,
    marginBottom: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 50,
  },
});
