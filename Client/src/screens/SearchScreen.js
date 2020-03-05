import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		await fetch("http://localhost:19001/workout.json")
		.then(r => r.json())
		.then(r => setResults(r))
		console.log(results)
	};

	useEffect(() => {
		searchApi();
	}, [])

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi()}
			/>
      <Text>Ciclos de Treinos</Text>
      <ResultList title={results[0].title} description={results[0].description} results={results[0].week}/>
      <ResultList title={results[1].title} description={results[1].description}/>
      <ResultList title={results[2].title} description={results[2].description}/>
    </View>
	)
};

const styles = StyleSheet.create({});

export default SearchScreen;
