import React from "react";
import { FlatList } from "react-native";

import { Card } from "./card";

export function Cards({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      scrollEventThrottle={16}
      decelerationRate="fast"
      renderItem={({ item }) => <Card nome={item.nome} img={item.img} />}
    />
  );
}
