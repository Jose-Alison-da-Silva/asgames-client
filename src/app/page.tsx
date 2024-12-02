import Home from '@/templates/Home'

import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighligth: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighligth: highlightMock
}

export default function Index() {
  return <Home {...props} />
}
