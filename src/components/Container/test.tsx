import { renderWithTheme } from '../../utils/tests/helpers'
import { Container } from '.'
import theme from '../../styles/theme'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>{' '}
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )
  })
})
