import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingIndicator = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="small" color="#0000ff" />
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight:'bold'
  },
});

export default LoadingIndicator;
