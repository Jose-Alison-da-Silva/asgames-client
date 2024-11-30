import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
