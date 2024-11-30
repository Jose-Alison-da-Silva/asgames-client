import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '30rem' }}>
        <Story />
      </div>
    )
  ]
}

export const WithRibbon: StoryObj<GameCardProps> = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '30rem' }}>
        <Story />
      </div>
    )
  ],
  args: {
    ribbon: '20% OFF',
    ribbonColor: 'primary',
    ribbonSize: 'small'
  }
}
