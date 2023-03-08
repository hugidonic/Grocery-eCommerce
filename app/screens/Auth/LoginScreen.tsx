// React and packages
import React from 'react';
import { StyleSheet } from 'react-native';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, TextField, Button } from '../../components';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigatorParamList } from '../../navigators';

type LoginScreenProps = StackScreenProps<NavigatorParamList, 'login'>;


export const LoginScreen = (props: LoginScreenProps) => {
	return (
		<Screen style={styles.container} preset="fixed">
			<Block>
				{/* Titles */}
				<Block>
					<Text style={{marginBottom: 5}} size="title" weight="black">
						Sign In
					</Text>
					<Text weight="light">Enter your login and password</Text>
				</Block>

				{/* Text fields */}
				<Block marginVertical={20}>
					<TextField label="Email" />
					<TextField label="Password" isPassword />
				</Block>

				{/* TODO: Forgot password */}
				<Text style={{ marginBottom: 20, textAlign: 'right' }}>Forgot password?</Text>

				{/* Submit button */}
				<Block align="center">
					<Button preset="primary" text="Log in" onPress={() => props.navigation.navigate('TabsStack')} style={{ marginBottom: 10 }} />
          {/* Redirect to the sign up page*/}
					<Text size="small">
						Don't have an account?{' '}
						<Text size="small" color={colors.primary} onPress={() => props.navigation.navigate('register')}>
							Sign up
						</Text>
					</Text>
				</Block>
			</Block>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.white,
		paddingHorizontal: spacing[5],
		minHeight: '100%',
		justifyContent: 'center'
	}
});
