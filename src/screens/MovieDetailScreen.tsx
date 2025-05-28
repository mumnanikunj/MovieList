import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const MovieDetailScreen = ({route}: any) => {
  const {movie} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {movie.cover_i && (
        <Image
          source={{
            uri: `https://covers.openlibrary.org/b/id/${movie.cover_i}-L.jpg`,
          }}
          style={styles.image}
        />
      )}
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.info}>Author: {movie.author_name?.[0]}</Text>
      <Text style={styles.info}>Year: {movie.first_publish_year}</Text>
      <Text style={styles.info}>
        Language:{' '}
        {movie.language?.map((lang: string) => `"${lang}"`).join(', ') || 'N/A'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', padding: 20},
  image: {
    width: 200,
    height: 300, marginBottom: 20},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {fontSize: 16, marginVertical: 4},
});

export default MovieDetailScreen;
