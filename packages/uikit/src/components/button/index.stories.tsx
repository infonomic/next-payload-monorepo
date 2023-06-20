// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Button } from './index'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
}

export const Default = (): JSX.Element => {
  return (
    <>
      <div className="mb-6">
        <div className="max-w-[400px]">
          <Button>Click Me!</Button>
        </div>
      </div>
    </>
  )
}
