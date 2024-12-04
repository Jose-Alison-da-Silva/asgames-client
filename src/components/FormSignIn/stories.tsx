import { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
