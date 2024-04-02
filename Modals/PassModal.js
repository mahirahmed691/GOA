import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Ionicons } from "@expo/vector-icons";

const PassModal = ({ passData, isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons
            style={{ bottom: -10 }}
            name="chevron-back-outline"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{ top: -15, fontWeight: "bold", fontSize: 15 }}>PASS</Text>
        <View style={styles.modalContent}>
          <View
            style={{ backgroundColor: "white", padding: 30, borderWidth: 0.2 }}
          >
            <Text style={styles.passName}>Mahir Ahmed{passData.name}</Text>
            <Text style={styles.memberSince}>
              Member Since April 2024{passData.memberSince}
            </Text>
            <View style={styles.qrCodeContainer}>
              <QRCode value="Your QR Code Data Here" size={300} />
            </View>
          </View>
          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 14,
              fontFamily: "Arial",
            }}
          >
            Check in easily get personalised service at GOA and events.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 60,
  },
  modalContent: {
    backgroundColor: "whitesmoke",
    padding: 20,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  passName: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    textTransform: "uppercase",
    textAlign: "center",
  },
  memberSince: {
    fontSize: 12,
    marginBottom: 10,
    fontFamily: "Helvetica",
    textAlign: "center",
    color: "#999",
  },
  qrCodeContainer: {
    marginVertical: 20,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PassModal;
