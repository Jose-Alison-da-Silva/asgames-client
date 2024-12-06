import Wishlist, { WishlistTemplateProps } from '../../templates/Wishlist'

import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

export default function WishlistPage() {
  return <Wishlist {...props} />
}
