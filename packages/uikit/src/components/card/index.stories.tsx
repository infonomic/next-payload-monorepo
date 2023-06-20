// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Card } from './index'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
}

export const Default = (): JSX.Element => {
  return (
    <>
      <div className="mb-6">
        <div className="max-w-[400px]">
          <Card hover={true}>I'm a hover card</Card>
        </div>
      </div>
    </>
  )
}
