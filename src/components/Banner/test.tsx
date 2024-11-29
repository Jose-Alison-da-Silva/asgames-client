import { screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Banner />', () => {
  it('should render the Banner correctly', () => {
    renderWithTheme(
      <Banner
        img="img/banner.png"
        title="Defy death"
        subtitle="Play the new CrashLands season"
        buttonLabel="Get the ultimate gaming experience"
        buttonLink="games/defy-death"
      />
    )

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Get the ultimate gaming experience/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toHaveAttribute(
      'src',
      'img/banner.png'
    )
  })
})
