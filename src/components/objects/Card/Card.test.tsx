import { render } from '@testing-library/react'

import Card from './index'

const setup = () => {
  const utils = render(
    <Card title="test-title" subtitle="test-subtitle">
      test-content
    </Card>
  )
  const card = utils.getByText('test-title')
  return {
    card,
    ...utils,
  }
}

test('title working', async () => {
  const { getByText } = setup()

  getByText('test-title')
})

test('subtitle working', async () => {
  const { getByText } = setup()

  getByText('test-subtitle')
})

test('content working', async () => {
  const { getByText } = setup()

  getByText('test-content')
})
