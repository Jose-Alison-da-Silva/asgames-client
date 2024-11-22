import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj = {
  render: () => <MediaMatch greaterThan="medium">Only Desktop</MediaMatch>
}

export const Mobile: StoryObj = {
  render: () => <MediaMatch lessThan="medium">Only Mobile</MediaMatch>
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
