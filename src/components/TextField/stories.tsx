import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    icon: <Email />,
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: StoryObj<TextFieldProps> = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '30rem', padding: '1.6rem' }}>
        <Story />
      </div>
    )
  ]
}

export const withError: StoryObj<TextFieldProps> = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '30rem', padding: '1.6rem' }}>
        <Story />
      </div>
    )
  ],
  args: {
    error: 'Field is required'
  }
}
