import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BigPromo = ({ promo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: promo.imageUri }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
        <Text style={styles.title}>{promo.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  title: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
    textTransform: "uppercase",
  },
});

export default BigPromo;
