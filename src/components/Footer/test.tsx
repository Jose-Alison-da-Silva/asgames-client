import { screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact Us/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
  })
})
