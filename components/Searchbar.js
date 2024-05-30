// components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="gray" style={styles.icon} />
      <TextInput 
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f5ff',
    borderRadius: 10,
    borderWidth:.4,
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding:10,
    borderRadius:10,
    backgroundColor:'#f3f5ff'
  },
});

export default SearchBar;
