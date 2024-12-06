import Cart, { CartProps } from '../../templates/Cart'

import itemsMock from '../../components/CartList/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'
import cardsMock from '../../components/PaymentOptions/mock'

const props: CartProps = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

export default function CartPage() {
  return <Cart {...props} />
}
