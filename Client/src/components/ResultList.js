import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultList = ({title, description, results}) => {
	return(
		<View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <FlatList horizontal
        data={results}
        keyExtrator={result => result.id}
        renderItem={({item}) => {
          return <Text>{item.name}</Text>
        }}
      />
		</View>
	);
};

export default ResultList;

