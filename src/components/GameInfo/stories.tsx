import { Meta, StoryObj } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto', padding: '1.6rem' }}>
        <Story />
      </div>
    )
  ]
}
