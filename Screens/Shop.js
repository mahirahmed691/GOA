import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const mostViewedItems = [
  {
    id: 1,
    name: "Explore More Sneakers",
    image:
      "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$19.99",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Need some new tech?",
    image:
      "https://images.pexels.com/photos/270695/pexels-photo-270695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$19.99",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Aah thats fresh",
    image:
      "https://images.pexels.com/photos/4202927/pexels-photo-4202927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$19.99",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Let's get protected",
    image:
      "https://images.pexels.com/photos/1670768/pexels-photo-1670768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$19.99",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Oh Wow, Glow",
    image:
      "https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$19.99",
    rating: 4.5,
  },
];

const popularItems = [
  {
    id: 1,
    name: "New  & Featured",
    image:
      "https://static.nike.com/a/images/t_default/60618c33-70df-45c4-98eb-4870f2625b6c/custom-nike-air-force-1-mid-by-you-shoes.png",
  },
  {
    id: 2,
    name: "Shoes",
    image:
      "https://static.nike.com/a/images/t_default/60618c33-70df-45c4-98eb-4870f2625b6c/custom-nike-air-force-1-mid-by-you-shoes.png",
  },
  {
    id: 3,
    name: "Clothing",
    image:
      "https://images.thenorthface.com/is/image/TheNorthFaceEU/3C8DKK9?$960x1120_CLR$",
  },
  {
    id: 4,
    name: "Pets",
    image:
      "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Clipart-Background.png",
  },
];

const Shop = () => {
  const [activeTab, setActiveTab] = useState("Men");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Men" && styles.activeTab]}
          onPress={() => setActiveTab("Men")}
        >
          <Text style={styles.tabText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Women" && styles.activeTab]}
          onPress={() => setActiveTab("Women")}
        >
          <Text style={styles.tabText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Kids" && styles.activeTab]}
          onPress={() => setActiveTab("Kids")}
        >
          <Text style={styles.tabText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Must-Haves, Best Sellers & More</Text>
        <FlatList
          data={mostViewedItems}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={[styles.section, { flex: 1 }]}>
        <FlatList
          data={popularItems}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemVertical}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemNameVertical}>{item.name}</Text>
              </View>
              <Image
                source={{ uri: item.image }}
                style={styles.itemImageVertical}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 2,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#333", // Active tab color
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 10,
    color: "#000",
    fontFamily: "Helvetica Neue",
  },
  item: {
    backgroundColor: "white",
    marginRight: 0,
    margin: 10,
    borderRadius: 4,
    width: 120,
  },
  itemVertical: {
    backgroundColor: "#eee",
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    borderRadius: 4,
    resizeMode: "cover",
  },
  itemImageVertical: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    resizeMode:'contain'
  },
  itemName: {
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 5,
    marginTop: 10,
    fontFamily: "Helvetica Neue",
  },
  itemNameVertical: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 10,
    fontFamily: "Helvetica Neue",
  },
  itemPrice: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  itemRating: {
    fontSize: 12,
    color: "#666",
  },
});

export default Shop;
