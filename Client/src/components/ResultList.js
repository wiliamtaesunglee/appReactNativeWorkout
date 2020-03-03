import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultList = ({title}) => {
	return(
		<View>
			<Text>{title}</Text>
			<FlatList horizontal  />
		</View>
	);
};

export default ResultList;

