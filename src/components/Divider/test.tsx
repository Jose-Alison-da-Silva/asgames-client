import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Divider />)

    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
