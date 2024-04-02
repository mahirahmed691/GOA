import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
  Animated,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SideMenu = ({ onClose }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dx > 0) {
        Animated.event([null, { dx: pan.x }], { useNativeDriver: false })(
          event,
          gestureState
        );
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.dx < -50) {
        Animated.timing(pan, {
          toValue: { x: -300, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }).start(() => onClose());
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: pan.x }] }]}
      {...panResponder.panHandlers}
    >
      {/* Avatar Picture */}
      <View style={styles.avatarContainer}>
        <Image
          source={require("../assets/naruto.jpeg")} // Change to the path of your avatar image
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="ellipsis-vertical" size={18} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="home" size={20} color="#00CDBC" />
        <Text style={styles.menuItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="basket" size={20} color="#00CDBC" />
        <Text style={styles.menuItemText}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="briefcase" size={20} color="#00CDBC" />
        <Text style={styles.menuItemText}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="information-circle" size={20} color="#00CDBC" />
        <Text style={styles.menuItemText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="mail" size={20} color="#00CDBC" />
        <Text style={styles.menuItemText}>Contact</Text>
      </TouchableOpacity>

      {/* Logout Option */}
      <TouchableOpacity style={styles.logoutItem} onPress={() => {}}>
        <Icon name="log-out" size={20} color="#000" />
        <Text style={[styles.menuItemText, { color: "#000" }]}>Logout</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, 
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 300, 
    backgroundColor: "#f0f0f0",
    elevation: 8, 
    zIndex: 1000, 
    marginTop: 115, 
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  menuIcon: {
    marginLeft: "auto",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: "#999", // Thin border between menu items
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Avenir-Heavy",
  },
  logoutItem: {
    marginTop:200,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
});

export default SideMenu;
