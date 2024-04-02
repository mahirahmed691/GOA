import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";

export default function ProductDetailScreen({ product, closeModal }) {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <View style={styles.iconButtonContainer}>
              <IconButton
                icon="arrow-left"
                color="#fff"
                iconColor="white"
                backgroundColor={"#00CDBC"}
                onPress={closeModal}
              />
            </View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: "700",
                fontFamily: "Futura",
              }}
            >
              Details
            </Text>
            <View style={styles.iconButtonContainer}>
              <IconButton
                icon="heart-outline"
                iconColor="white"
                backgroundColor={"#00CDBC"}
                onPress={() => {
                  // Add your menu functionality here
                }}
              />
            </View>
          </View>
          <View style={styles.productImageBox}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.content}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <View style={styles.detailsContainer}>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Price</Text>
                  <Text style={styles.detailText}>{product.price}</Text>
                </View>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Category</Text>
                  <Text style={styles.detailText}>{product.category}</Text>
                </View>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Brand</Text>
                  <Text style={styles.detailText}>{product.brand}</Text>
                </View>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Rating</Text>
                  <Text style={styles.detailText}>{product.rating}</Text>
                </View>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Reviews Count</Text>
                  <Text style={styles.detailText}>{product.reviews_count}</Text>
                </View>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Availability</Text>
                  <Text style={styles.detailText}>{product.availability}</Text>
                </View>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Seller</Text>
                  <Text style={styles.detailText}>{product.seller}</Text>
                </View>
                <View style={styles.detailCard}>
                  <Text style={styles.detailLabel}>Shipping</Text>
                  <Text style={styles.detailText}>{product.shipping}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 20,
    margin: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    backgroundColor: "#FFF", // Header background color
  },
  headerButton: {
    fontSize: 18,
    color: "#007AFF", // Back button color
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  detailCard: {
    width: "48%",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  detailText: {
    fontSize: 12,
    color: "#555",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#00CDBC",
    padding: 10,
    borderRadius: 20,
  },
  productImage: {
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  iconButtonContainer: {
    borderRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
});
