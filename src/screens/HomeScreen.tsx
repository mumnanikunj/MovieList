import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';


type Movie = {
  title: string;
  first_publish_year?: number;
  cover_i?: number;
  [key: string]: any;
};

const HomeScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState('harry potter');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setMovies(data.docs || []);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchMovies();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SearchBar value={query} onChangeText={setQuery} />
      {loading ? <ActivityIndicator size="large" /> :
        error ? <Text>{error}</Text> :
          movies.length === 0 ? <Text>No results found</Text> :
            <FlatList
              data={movies}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <MovieCard
                  title={item.title}
                  date={item.first_publish_year}
                  poster={item.cover_i}
                  onPress={() => navigation.navigate('MovieDetailScreen', { movie: item })}
                />
              )}
            />}
    </View>
  );
};

export default HomeScreen;
