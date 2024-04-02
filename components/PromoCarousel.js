import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from "react-native";

const PromoCarousel = ({ promos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / Dimensions.get("window").width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {promos.map((promo, index) => (
          <View key={index} style={styles.promoItem}>
            <Image
              source={{ uri: promo.imageUri }}
              style={styles.promoImage}
              resizeMode="cover"
            />
            <Text style={styles.promoText}>{promo.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {promos.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: index === activeIndex ? "#000" : "#d0d0d0",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:10
  },
  promoItem: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FFFF",
    borderRadius: 10,
    height:100,
  },
  promoImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 10,
  },
  promoText: {
    flex: 1,
    fontSize: 12,
    fontWeight: "400",
    color: "black",
    width:230,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 2,
    marginHorizontal: 5,
  },
});

export default PromoCarousel;
