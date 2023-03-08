// React and packages
import React from 'react';
import {StyleSheet} from 'react-native';
// Other components
import {Block, Text} from '..';
// Theme
import { colors } from '../../theme';

interface RadioButtonProps {
  isActive: boolean;
}

const BUTTON_SIZE = 28

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <Block style={styles.container} shadow>
      <Block style={[styles.inner, {
        backgroundColor: props.isActive ? colors.primary : colors.palette.white
      }]} />
    </Block>
  )
};

const styles =  StyleSheet.create({
  container: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE,
    backgroundColor: colors.palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: BUTTON_SIZE / 2,
    height: BUTTON_SIZE / 2,
    borderRadius: BUTTON_SIZE
  }
});