import { Meta, StoryObj } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta

export const Default: StoryObj<RibbonProps> = {
  decorators: [
    (Story) => (
      <div
        style={{
          width: '40rem',
          height: '25rem',
          position: 'relative',
          backgroundColor: '#888'
        }}
      >
        <Story />
      </div>
    )
  ],
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
}
