import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({value, onChangeText}: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 10},
  input: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
  },
});

export default SearchBar;
