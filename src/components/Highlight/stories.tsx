import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Default: StoryObj<HighlightProps> = {
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
