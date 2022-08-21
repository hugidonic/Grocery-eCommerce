// React and packages
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
// Theme
import { colors, spacing } from '../../theme';
// Types
import { HeaderProps } from './Header.props';
// Other components
import { Block, Text } from '..';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
// Navigation 
import { useAppNavigation } from '../../navigators';

export const Header = (props: HeaderProps) => {
	const { title, withChevron = true, rightSideComponent } = props;

  const nav = useAppNavigation()

	return (
		<Block justify="center" align="center" row style={styles.header}>
			{withChevron && (
				<Pressable
					onPress={nav.goBack}
					style={{
						position: 'absolute',
						left: 0
					}}
				>
					<Entypo name="chevron-left" size={30} color={colors.palette.black} />
				</Pressable>
			)}

				<Text size="title" weight="bold">
					{title}
				</Text>

      {rightSideComponent}
		</Block>
	);
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'relative',
    paddingVertical: spacing[5],
  }
})