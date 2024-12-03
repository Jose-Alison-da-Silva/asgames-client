import { Meta, StoryObj } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
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

export const Default: StoryObj<RadioProps> = {
  decorators: [
    () => (
      <>
        <div style={{ padding: 10 }}>
          <Radio
            label="primeiro"
            labelFor="primeiro"
            id="primeiro"
            name="nome"
            value="primeiro"
            defaultChecked
          />
        </div>
        <div style={{ padding: 10 }}>
          <Radio
            label="segundo"
            labelFor="segundo"
            id="segundo"
            name="nome"
            value="segundo"
          />
        </div>
        <div style={{ padding: 10 }}>
          <Radio
            label="terceiro"
            labelFor="terceiro"
            id="terceiro"
            name="nome"
            value="terceiro"
          />
        </div>
      </>
    )
  ]
}
