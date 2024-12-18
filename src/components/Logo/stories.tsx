import { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: StoryObj = {
  args: {
    color: 'white',
    size: 'large',
    hideOnMobile: false
  }
}
