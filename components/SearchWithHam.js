// App.js
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './Searchbar';

const SearchWithHam = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
        <Pressable style={styles.hamburgerButton}>
          <Ionicons name="filter" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    paddingRight:10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerButton: {
    marginLeft: 10,
    padding: 8,
    borderRadius:10,
    backgroundColor:'#cf3a3b'
  },
});

export default SearchWithHam;
