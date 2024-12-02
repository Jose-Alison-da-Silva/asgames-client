import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    nextjs: {
      appDirectory: true
    },
    backgrounds: {
      default: 'won-light',
      values: [
        {
          name: 'won-light',
          value: theme.colors.white
        },
        {
          name: 'won-dark',
          value: theme.colors.mainBg
        }
      ]
    }
  }
}

export default preview
export const tags = ['autodocs']
