import { Meta, StoryObj } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: StoryObj<CheckboxProps> = {
  decorators: [
    () => (
      <>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Action"
            labelFor="action"
            isChecked
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox name="category" label="Adventure" labelFor="adventure" />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox name="category" label="Strategy" labelFor="strategy" />
        </div>
      </>
    )
  ]
}