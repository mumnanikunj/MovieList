import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const MovieCard = ({title, date, poster, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {poster ? (
        <Image
          source={{uri: `https://covers.openlibrary.org/b/id/${poster}-M.jpg`}}
          style={styles.image}
        />
      ) : (
        <View style={[styles.image, styles.placeholder]} />
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 120,
  },
  placeholder: {
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default MovieCard;
