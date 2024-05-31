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
    width: 190,
    height: 300,
    backgroundColor: "#f8e7e7",
    alignItems: "center",
    padding: 20,
    borderColor:' #cf3a3b',
    marginHorizontal: 6,
    borderRadius: 10,
    shadowColor: "#000",
    // shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  cardContent: {
    width:'100%',
    // borderRadius:10,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
});

export default CategoryCards;
