import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		await fetch("http://localhost:19001/workout.json")
		.then(r => r.json())
		.then(r => setResults(r))
		console.log(results)
	};

	return (
		<View>
			<SearchBar 
				term={term} 
				onTermChange={newTerm => setTerm(newTerm)} 
				onTermSubmit={() => searchApi()}			
			/>
			<Text>Search Screen</Text>
			<Text>{results.length}</Text>
		</View>
	)    
};

const styles = StyleSheet.create({});

export default SearchScreen;
