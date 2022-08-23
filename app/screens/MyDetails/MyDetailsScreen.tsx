// React and packages
import React from 'react';
import { Image, StyleSheet } from 'react-native'
// Types and utils
import { StackScreenProps } from '@react-navigation/stack';
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import {
	Screen,
	Text,
	Block,
	Header,
	Divider,
	Button,
} from '../../components';
import { ProfileNavigatorParamList } from '../../navigators';

interface MyDetailsScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'myDetails'> {

}

export const MyDetailsScreen = (props: MyDetailsScreenProps) => {

  return (
    <Screen style={styles.container} preset="scroll">
			<Header title="My Details"/>

			<Block align="center">
				<Image
					source={{ uri: 'https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png'}}
					style={styles.image}
				/>
				<Block align='center' marginVertical={spacing[5]}>
					<Text size="title" weight='bold'>Vadim Aminev</Text>
					<Text color={colors.dim}>hugidonic@ya.ru</Text>
				</Block>
			</Block>

			<Divider />

			{/* TODO: STATS */}
			<Text style={{textAlign: 'center'}} size='title'>STATS</Text>


			<Block
				align="center"
				style={{ position: 'absolute', bottom: 40, right: 0, left: 0 }}
			>
				<Button preset="secondary" text="log out" />
			</Block>

    </Screen>
  )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: 'cover',
		borderRadius: 100,
	}
});
