// React and packages;
import React, { useState } from 'react';
import { StyleSheet, StyleProp, ViewStyle, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { observer } from 'mobx-react-lite';
// Types and utils;
import { colors, spacing } from '../../theme';
// Components;
import { Block } from '..';

export interface SearchBarProps {
	style?: StyleProp<ViewStyle>;
}

export const SearchBar = observer(function SearchBar(props: SearchBarProps) {
	const { style } = props;
	const styles = Object.assign({}, st, style);
  const [ search, setSearch ] = useState('');

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
});

const st = StyleSheet.create({
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
