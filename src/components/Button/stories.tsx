import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now'
  }
}

export const withIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
}
