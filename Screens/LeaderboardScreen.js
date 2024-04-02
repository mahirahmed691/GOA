import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Animated } from "react-native";

// Sample data for sellers and their sales performance
const sellersData = [
  { id: 1, name: "Mahir Ahmed", sales: 1050 },
  { id: 2, name: "Mack Miller", sales: 180 },
  { id: 3, name: "Harry Style", sales: 320 },
  { id: 4, name: "Tory Lanes", sales: 150 },
  { id: 5, name: "Meghan Markle", sales: 200 },
];

const LeaderboardScreen = () => {
  const [sortBySales, setSortBySales] = useState(true); // State to track sorting option
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [filteredSellers, setFilteredSellers] = useState([]); // State to store filtered sellers
  const [averageSales, setAverageSales] = useState(0); // State to store average sales
  const [animatedValue] = useState(new Animated.Value(0)); // Animated value for animations

  useEffect(() => {
    // Calculate average sales
    const totalSales = sellersData.reduce((total, seller) => total + seller.sales, 0);
    const avgSales = totalSales / sellersData.length;
    setAverageSales(avgSales);

    // Initial sorting
    sortSellers();
  }, []);

  useEffect(() => {
    // Filter sellers based on search query
    const filtered = sellersData.filter(seller =>
      seller.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSellers(filtered);

    // Trigger animation on search query change
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [searchQuery]);

  // Sort sellers by either sales or name based on the sorting option
  const sortSellers = () => {
    const sorted = [...filteredSellers].sort((a, b) => {
      if (sortBySales) {
        return b.sales - a.sales;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setFilteredSellers(sorted);
  };

  // Function to toggle the sorting option
  const toggleSort = () => {
    setSortBySales(!sortBySales);
    sortSellers(); // Call sortSellers after toggling the sorting option
  };

  // Function to render each seller item
  const renderSellerItem = ({ item, index }) => (
    <View style={styles.sellerItem}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Text style={styles.sellerName}>{item.name}</Text>
      <Text style={styles.sales}>{item.sales} Sales</Text>
    </View>
  );

  return (
    
    <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.searchInput}
            placeholder="Search by Name"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
      <View style={styles.header}>
        <View style={styles.filterSearchContainer}>
          <TouchableOpacity onPress={toggleSort} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>
              {sortBySales ? "Sort by Name" : "Sort by Sales"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    
      <FlatList
        data={filteredSellers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSellerItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.averageSalesContainer}>
        <Text style={styles.averageSalesText}>Average Sales: {averageSales.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginHorizontal:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Futura',
  },
  filterSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleButton: {
    padding: 10,
    backgroundColor: "#00CDBC",
    borderRadius: 5,
    marginRight: 10,
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: 'Futura',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
    fontSize: 16,
    fontFamily: "Arial", // You can change the font family to any modern font
    color: "#333", // Text color
    marginBottom: 20, // Add some margin to separate it from the toggle button
  },
  
  listContainer: {
    paddingBottom: 20,
  },
  sellerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rank: {
    flex: 1,
    fontSize: 15,
    marginRight: 10,
    textAlign: "center",
  },
  sellerName: {
    flex: 3,
    fontSize: 15,
    fontFamily: 'Futura',
  },
  sales: {
    flex: 2,
    fontSize: 12,
    textAlign: "right",
    fontFamily: 'Futura',
    fontWeight: 'bold',
  },
  averageSalesContainer: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor:'black',
    padding:10,
  },
  averageSalesText: {
    width:"100%",
    fontSize: 18,
    fontFamily: 'Futura',
    color:'#FFF',
    textAlign:'center'
  },
});

export default LeaderboardScreen;
