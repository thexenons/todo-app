import { render, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import Input from './index'

const TestComponent = ({ placeholder }: any) => {
  const [value, setValue] = useState('')

  return (
    <div>
      <Input onChange={setValue} placeholder={placeholder || 'test'} />
      <div>{value}</div>
    </div>
  )
}

const setup = (placeholder = 'test') => {
  const utils = render(<TestComponent placeholder={placeholder} />)
  const input = utils.getByPlaceholderText(placeholder) as HTMLInputElement
  return {
    input,
    ...utils,
  }
}

test('placeholder should work', async () => {
  const { getByPlaceholderText } = setup('test-2')

  getByPlaceholderText('test-2')
})

test('onChange should work', async () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'testing value' } })
  expect(input.value).toBe('testing value')
})

test('input is emptied after enter', async () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'testing value' } })
  expect(input.value).toBe('testing value')
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
  expect(input.value).toBe('')
})
