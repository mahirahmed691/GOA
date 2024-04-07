import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";

// Mock data for scanned items
const mockScannedItems = [
  { id: 1, type: "QR Code", data: "ABC123" },
  { id: 2, type: "Barcode", data: "123456789" },
  { id: 3, type: "QR Code", data: "DEF456" },
  { id: 4, type: "Barcode", data: "987654321" },
];

export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [isScanning, setIsScanning] = useState(false); // State to manage scanning status
  const [scannedData, setScannedData] = useState(null); // State to store scanned data
  const [numberOfScans, setNumberOfScans] = useState(0); // State to store the number of scans

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData({ type, data });
    setNumberOfScans((prev) => prev + 1);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const startScanning = () => {
    setIsScanning(true);
  };

  const closeScanner = () => {
    setIsScanning(false);
    setScanned(false);
    setScannedData(null);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.QRContainer}>
      {isScanning ? (
        <>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            flashMode={flashOn ? "torch" : "off"} // Set flash mode based on flashOn state
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeScanner}>
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
          {scannedData && (
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setFlashOn(!flashOn)}
            >
              {scannedData.type === "QR Code" ? (
                <Ionicons
                  name={flashOn ? "flash" : "flash-off"}
                  size={24}
                  color="#fff"
                />
              ) : (
                <Ionicons
                  name={flashOn ? "barcode" : "barcode-outline"}
                  size={24}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View style={styles.mockScannerContainer}>
          <Text style={styles.mockScannerTitle}>Recent Scans</Text>
          {mockScannedItems.map((item) => (
            <View style={styles.scannedItem} key={item.id}>
              <Text style={styles.scannedItemType}>{item.type}</Text>
              <Text style={styles.scannedItemData}>{item.data}</Text>
            </View>
          ))}
        </View>
      )}
      {scannedData && (
        <View style={styles.scannedDataContainer}>
          {scannedData.type === "QR Code" ? (
            <Text style={styles.scannedData}>{scannedData.data}</Text>
          ) : (
            <BarCodeScanner
              style={styles.barcode}
              value={scannedData.data}
              format="CODE128"
            />
          )}
        </View>
      )}
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      {!isScanning && (
        <View style={styles.squareContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 40,
            }}
          >
            <TouchableOpacity style={styles.square} onPress={startScanning}>
            <Ionicons
                style={{ alignSelf: "center", marginTop: 10 }}
                name="scan"
                size={25}
                color="#00CDBC"
              />
              <Text
                style={styles.squareText}
              >Start Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.square}
              onPress={() => alert(`Number of Scans: ${numberOfScans}`)}
            >
               <Ionicons
                style={{ alignSelf: "center", marginTop: 10 }}
                name="barcode"
                size={25}
                color="#00CDBC"
              />
              <Text style={styles.squareText}>{numberOfScans}</Text>
            </TouchableOpacity>
            <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={styles.square}
              onPress={() => alert("View History")}
            >
              <Ionicons
                style={{ alignSelf: "center", marginTop: 10 }}
                name="time"
                size={25}
                color="#00CDBC"
              />
              <Text style={styles.squareText}>View History</Text>
            </TouchableOpacity>
          </View>
          </View>
         
        </View>
      )}
    </SafeAreaView>
  );
}
