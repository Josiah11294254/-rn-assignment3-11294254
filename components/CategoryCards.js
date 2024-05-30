import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

const CategoryCards = ({ category, image, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{fontWeight:'bold'}}>{category}</Text>
        <Text style={{fontFamily:'monospace', fontSize:10}}>{description}</Text>
      </View>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: "#f3f5ff",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardContent: {
    width:'100%'
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default CategoryCards;
