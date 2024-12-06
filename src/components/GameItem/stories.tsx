import { Meta, StoryObj } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee.png',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: StoryObj<GameItemProps> = {}

export const WithPaymentInfo: StoryObj<GameItemProps> = {
  args: {
    downloadLink: 'https://wongames.com/game/download/21312ndasd',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2024 at 20:32'
    }
  }
}
