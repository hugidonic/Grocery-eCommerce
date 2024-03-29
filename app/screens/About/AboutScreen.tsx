// React and packages
import React from 'react';
import { StyleSheet } from 'react-native';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Header, Screen, Text } from '../../components';

export const AboutScreen = () => {
	return (
		<Screen style={styles.container} preset="scroll">
			<Header title="About us" />
			<Text size="medium" style={{ textAlign: 'center', marginTop: 60 }}>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
				doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
				veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
				voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
				magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
				qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
				numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
				suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
				iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
				vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
			</Text>
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
