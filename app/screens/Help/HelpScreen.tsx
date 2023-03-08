// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Header, TextField, Button } from '../../components';
// Types
import { ProfileNavigatorParamList } from '../../navigators';

interface HelpScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'help'> {}

export const HelpScreen = (props: HelpScreenProps) => {
	return (
		<Screen style={styles.container} preset="fixed">
			<Header title="Help" />

			<TextField placeholder="Type here..." label="Name" />
			<TextField placeholder="Type here..." label="Email" />
			<TextField
				placeholder="Type here..."
				label="Your Message"
				multiline
				numberOfLines={7}
				textAlignVertical="top"
			/>
			<Block
				justify="center"
				align="center"
				style={{ position: 'absolute', bottom: 40, right: 0, left: 0 }}
			>
				<Button preset="primary" text="Send" shadow />
			</Block>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	}
});
