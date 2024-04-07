import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import ProductDetailScreen from "./ProductDetailScreen";
import MasonryGrid from "react-native-masonry-grid";
import mockData from "../data/mockData";
import SideMenu from "./SideMenu";
import PromoCarousel from "../components/PromoCarousel";
import BigPromo from "../components/BigPromo";

export default function HomeScreen() {
  const [products, setProducts] = useState(mockData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [numColumns, setNumColumns] = useState(1);
  const [isOptionsMenuVisible, setIsOptionsMenuVisible] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState("");

  // Define bigPromos here
  const bigPromos = [
    {
      text: "Special Offer: Buy 1 Get 1 Free!",
      imageUri: "https://cdn.dribbble.com/userupload/13655052/file/original-6edcc4b317409f4aaebd9050f8dbfae8.png?resize=1504x1118",
    },
    {
      text: "Limited Time Deal: 50% Off All Items",
      imageUri: "https://cdn.dribbble.com/userupload/5152743/file/original-3f8094794a9d17c33cf861e487195121.png?resize=1504x846",
    },
    {
      text: "Limited Time Deal: 50% Off All Items",
      imageUri: "https://cdn.dribbble.com/userupload/9334529/file/original-1612f1a107a4d3786f6a524880ca4a98.png?resize=1504x1128",
    },
  ];

  const promos = [
    {
      text: "Get fave looks for less - as a Member you get access to",
      imageUri:
        "https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SL1500_.jpg",
    },
    {
      text: "Get fave looks for less - as a Member you get access to",
      imageUri:
        "https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SL1500_.jpg",
    },
    {
      text: "Get fave looks for less - as a Member you get access to",
      imageUri:
        "https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SL1500_.jpg",
    },
  ];

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setModalVisible1(true);
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  const resetCategoryFilter = () => {
    setSelectedCategory(null);
    setModalVisible(false);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  const handleColumnChange = (columns) => {
    setNumColumns(columns);
    setIsOptionsMenuVisible(false);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const OptionsButton = ({ onPress }) => {
    return (
      <IconButton icon="grid" iconColor="teal" size={24} onPress={onPress} />
    );
  };

  return (
    <View style={styles.container}>
      {isSideMenuOpen && (
        <TouchableWithoutFeedback onPress={toggleSideMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      {isSideMenuOpen && <SideMenu onClose={toggleSideMenu} />}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={toggleSideMenu}>
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              style={{ left: -100 }}
            />
          </TouchableOpacity>
          <Image
            source={require("/Users/mahirahmed/FBA/assets/Logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={toggleSearchBar}>
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              style={{ right: -100 }}
            />
          </TouchableOpacity>
        </View>
        {isSearchOpen && (
          <View style={styles.searchBarContainer}>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
          </View>
        )}
      </View>

      <Text style={styles.greeting}>{greeting} Mahir</Text>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryContainer}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.categoryButtonText}>
                {selectedCategory ? selectedCategory : "All"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <OptionsButton onPress={() => setIsOptionsMenuVisible(true)} />
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <ScrollView contentContainerStyle={styles.modalContent}>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={resetCategoryFilter}
              >
                <Text style={styles.categoryItemText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => filterProductsByCategory("Electronics")}
              >
                <Text style={styles.categoryItemText}>Electronics</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => filterProductsByCategory("Beauty")}
              >
                <Text style={styles.categoryItemText}>Beauty</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => filterProductsByCategory("Home & Kitchen")}
              >
                <Text style={styles.categoryItemText}>Home & Kitchen</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isOptionsMenuVisible}
        onRequestClose={() => setIsOptionsMenuVisible(false)}
      >
        <View style={styles.modalCentered}>
          <View style={styles.optionsMenu}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleColumnChange(1)}
            >
              <Text style={styles.optionText}>1 Column</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleColumnChange(2)}
            >
              <Text style={styles.optionText}>2 Columns</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleColumnChange(3)}
            >
              <Text style={styles.optionText}>3 Columns</Text>
            </TouchableOpacity>
            {/* Close modal button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsOptionsMenuVisible(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.productsContainer}>
        <Text style={styles.heading}>Top Picks for You</Text>
        <Text style={styles.heading2}>Recommend products</Text>
        {numColumns === 1 ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filteredProducts.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleProductSelect(item)}
              >
                <View style={styles.productContainer}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <MasonryGrid
            data={filteredProducts}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleProductSelect(item)}>
                <View style={styles.productContainer}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <Text style={styles.productID}>{item.id}</Text>
                  <Text style={styles.productBrand}>{item.brand}</Text>
                  <Text style={styles.productDescription}>{item.reviews}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
          />
        )}
        <PromoCarousel promos={promos} />
        {bigPromos.map((promo, index) => (
          <BigPromo
            key={index}
            promo={promo}
            onPress={() => handlePromoPress(promo)} // Define a function to handle promo press
          />
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => setModalVisible1(false)}
      >
        <ProductDetailScreen
          product={selectedProduct}
          closeModal={() => setModalVisible1(false)}
        />
      </Modal>
    </View>
  );
}
