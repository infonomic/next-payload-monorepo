import React from 'react'
import type { Preview } from '@storybook/react'
import '../src/styles/tailwind.css'
import '../src/styles/base.css'
import { withThemeByDataAttribute, withThemeByClassName } from '@storybook/addon-styling'

import { ThemeProvider } from '../src/theme/theme-provider'

const globalDecorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          padding: '12px',
          overflow: 'auto',
          backgroundColor:
            theme == null || theme.length === 0 || theme === 'dark' ? '#111827' : '#ffffff',
        }}
      >
        <div className="mb-8">
          <h1 className="text-slate-500 dark:text-slate-100 text-xl font-bold">{`${context.title} - ${context.story}`}</h1>
          <hr className="text-slate-700" />
        </div>
        <StoryFn />
      </div>
    </ThemeProvider>
  )
}

export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    // attributeName: 'data-mode',
  }),
]

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [],
        locales: '',
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
