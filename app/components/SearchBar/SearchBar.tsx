// React and packages;
import React, { useState } from 'react';
import { StyleSheet, StyleProp, ViewStyle, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Types and utils;
import { colors, spacing } from '../../theme';
// Components;
import { Block } from '..';

interface SearchBarProps {
	search: string;
	setSearch: (str: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { search, setSearch } = props;
	return (
		<Block>
			<FontAwesome
				name="search"
				size={22}
				color={colors.palette.black}
				style={styles.icon}
			/>
			<TextInput
				style={styles.input}
				value={search}
				onChangeText={(t) => setSearch(t)}
				placeholder="Поиск по товарам..."
				placeholderTextColor={colors.palette.grey}
			/>
		</Block>
	);
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 20,
    top: 12,
    zIndex: 1,
  },
	input: {
		backgroundColor: colors.palette.lighterGrey,
		borderRadius: 10,
		width: '100%',
		paddingVertical: 10,
    paddingLeft: 50,
		paddingHorizontal: spacing[3],
		fontSize: 18
	}
});
