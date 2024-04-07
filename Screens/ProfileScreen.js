import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles";
import EditProfileModal from "../modals/EditProfileModal";
import SettingsScreen from "./SettingsScreen";
import PassModal from "../modals/PassModal";

const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Beauty",
  "Sports",
  "Toys",
  "Health",
];

export default function ProfileScreen() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [isPassModalVisible, setIsPassModalVisible] = useState(false);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const openEditModal = () => {
    setIsEditModalVisible(true);
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false);
  };

  const openSettingsModal = () => {
    setIsSettingsModalVisible(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsModalVisible(false);
  };

  const openPassModal = () => {
    setIsPassModalVisible(true);
  };

  const closePassModal = () => {
    setIsPassModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <View style={styles.socialMediaLinks}>
        <View style={styles.socialLink}>
          <Ionicons name="logo-instagram" size={24} color="purple" />
        </View>
        <View style={styles.socialLink}>
          <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
        </View>
        <View style={styles.socialLink}>
          <Ionicons name="logo-tiktok" size={24} color="#000" />
        </View>
      </View>
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20210223094656",
        }}
        style={styles.profileImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.username}>Mahir Ahmed</Text>
      </View>

      <TouchableOpacity style={styles.settingsButton} onPress={openEditModal}>
        <Text style={styles.settingsButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.settingLinks}>
        <Ionicons name="archive-outline" size={24} color="silver" />

        <View style={styles.settingLink}>
          <TouchableOpacity onPress={openPassModal}>
            <Ionicons name="id-card-outline" size={24} color="silver" />
          </TouchableOpacity>
        </View>
        <View style={styles.settingLink}>
          <Ionicons name="calendar-number-outline" size={24} color="silver" />
        </View>
        <View style={styles.settingLink}>
          <TouchableOpacity onPress={openSettingsModal}>
            <Ionicons name="settings-outline" size={24} color="silver" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productInterests}>
        <View style={styles.interestsContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.interestItem,
                selectedInterests.includes(category) && styles.selectedInterest,
              ]}
              onPress={() => toggleInterest(category)}
            >
              <Text style={styles.interestText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.favoriteItems}>
        <Text style={styles.sectionTitle}>Favorite Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.favoriteItem}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/71hpUUcC5uL._AC_UY436_QL65_.jpg",
              }}
              style={styles.favoriteItemImage}
            />
            <Text style={styles.favoriteItemText}>Cannon HDX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteItem}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/71cnKUAixRL._AC_UY436_QL65_.jpg",
              }}
              style={styles.favoriteItemImage}
            />
            <Text style={styles.favoriteItemText}>Cosair PS5 Headset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteItem}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/61EVwZtrPeL._AC_UY436_QL65_.jpg",
              }}
              style={styles.favoriteItemImage}
            />
            <Text style={styles.favoriteItemText}>PS5 Bundle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteItem}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SL1500_.jpg",
              }}
              style={styles.favoriteItemImage}
            />
            <Text style={styles.favoriteItemText}>2 Set Pillow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteItem}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/51SMXww1SfL._SL1000_.jpg",
              }}
              style={styles.favoriteItemImage}
            />
            <Text style={styles.favoriteItemText}>Differin </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Render the EditProfileModal if isEditModalVisible is true */}
      <EditProfileModal
        isVisible={isEditModalVisible}
        onClose={closeEditModal}
      />
      <Modal
        visible={isSettingsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeSettingsModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity onPress={closeSettingsModal}>
                <Ionicons
                  style={{ left: 20, marginTop: 50 }}
                  name="close-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <SettingsScreen />
          </View>
        </View>
      </Modal>
      <PassModal
        isVisible={isPassModalVisible}
        onClose={closePassModal}
        passData={{ pass: "YourPass", expiration: "ExpirationDate" }} // Pass necessary data to the modal
      />
    </ScrollView>
  );
}
