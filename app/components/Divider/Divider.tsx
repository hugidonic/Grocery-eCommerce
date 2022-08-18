import React from 'react'
import { Block } from '..'
// Theme
import { colors } from '../../theme'

interface DividerProps {
  height?: number;
  color?: string;
}

export const Divider = (props: DividerProps) => {
  // Default height = 1
  // Default color = colors.dim
  const { height = 1, color = colors.dim } = props
  return (
    <Block style={{ height, width: '100%', opacity: 0.3 }} color={color} />
  )
}