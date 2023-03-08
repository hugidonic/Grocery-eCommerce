// React and packages
import React from 'react';
import { StyleSheet } from 'react-native';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, TextField, Button } from '../../components';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigatorParamList } from '../../navigators';

type RegisterScreenProps = StackScreenProps<NavigatorParamList, 'register'>;

export const RegisterScreen = (props: RegisterScreenProps) => {
	return (
		<Screen style={styles.container} preset="fixed">
			<Block>
				{/* Titles */}
				<Block>
					<Text style={{ marginBottom: 5 }} size="title" weight="black">
						Sign Up
					</Text>
					<Text weight="light">Enter your login and password</Text>
				</Block>

				{/* Text fields */}
				<Block marginVertical={20}>
					<TextField label="Username" />
					<TextField label="Email" />
					<TextField label="Password" isPassword />
				</Block>

				{/* Terms and Conditions */}
				<Text size="small" style={{ marginBottom: 20, textAlign: 'center' }}>
					By Continuing you agree to our{' '}
					<Text size="small" color={colors.primary}>
						Terms of Serice
					</Text>{' '}
					and{' '}
					<Text size="small" color={colors.primary}>
						Privacy Policy
					</Text>
				</Text>

				{/* Submit button */}
				<Block align="center">
					<Button
						preset="primary"
						text="Log in"
						onPress={() => props.navigation.navigate('TabsStack')}
						style={{ marginBottom: 10 }}
					/>

					{/* Redirect to the sign in page*/}
					<Text size="small">
						Already have an account?{' '}
						<Text
							size="small"
							color={colors.primary}
							onPress={() => props.navigation.navigate('login')}
						>
							Sign in
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
