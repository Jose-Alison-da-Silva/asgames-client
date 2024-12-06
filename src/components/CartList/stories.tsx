import { Meta, StoryObj } from '@storybook/react'
import CartList, { CartListProps } from '.'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 430,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<CartListProps> = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
