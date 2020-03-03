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
			<ResultList title='Mesociclo 1' />
			<ResultList title='Mesociclo 2' />
			<ResultList title='Mesociclo 3' />
		</View>
	)    
};

const styles = StyleSheet.create({});

export default SearchScreen;
