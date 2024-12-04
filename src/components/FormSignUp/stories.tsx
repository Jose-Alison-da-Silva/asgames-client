import { Meta, StoryObj } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
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
