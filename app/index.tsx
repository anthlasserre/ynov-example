import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useGetProducts } from "../hooks/useGetProducts";

export default function FirstScreen() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7c91bd",
      }}
    >
      <Text>{"First Screen"}</Text>
      {data?.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
      <Link href={"/second"}>
        <Text style={{ fontSize: 20, letterSpacing: 5, fontWeight: "bold" }}>
          {"Navigate"}
        </Text>
      </Link>
    </View>
  );
}
