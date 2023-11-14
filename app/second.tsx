import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useGetProductById } from "../hooks/useGetProductById";

export default function SecondScreen() {
  const { data } = useGetProductById(1);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a9b4cb",
      }}
    >
      <Text>{"Second Screen"}</Text>
      <Text>{data?.title}</Text>
      <Link href={"/"}>
        <Text style={{ fontSize: 20, letterSpacing: 5, fontWeight: "bold" }}>
          {"Go Back"}
        </Text>
      </Link>
    </View>
  );
}
