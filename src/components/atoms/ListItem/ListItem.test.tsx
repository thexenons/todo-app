import { render, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import ListItem from './index'

const TestComponent = ({ title, completed, active }: any) => {
  const [value, setValue] = useState('')

  const handleOnClick = () => {
    setValue('onClick')
  }

  const handleOnDelete = () => {
    setValue('onDelete')
  }

  return (
    <div>
      <ListItem title={title} completed={completed} active={active} onClick={handleOnClick} onDelete={handleOnDelete} />
      <div test-id="1">{value}</div>
    </div>
  )
}

const setup = (completed: boolean, active: boolean) => {
  const utils = render(<TestComponent title="test-item" completed={completed} active={active} />)
  const listItem = utils.getByText('test-item').parentElement as Element
  return {
    listItem,
    ...utils,
  }
}

test('title working', async () => {
  const { getByText } = setup(false, false)
  getByText('test-item')
})

test('completed working', async () => {
  const { listItem } = setup(true, false)
  expect(listItem?.className.split(' ').includes('completed')).toBe(true)
})

test('active working', async () => {
  const { listItem } = setup(false, true)
  expect(listItem?.className.split(' ').includes('active')).toBe(true)
})

test('onClick working', async () => {
  const { listItem, getByText } = setup(false, false)
  fireEvent.click(listItem)

  getByText('onClick')
})

test('onDelete working', async () => {
  const { getByTitle, getByText } = setup(false, false)
  const deleteButton = getByTitle('Delete')
  fireEvent.click(deleteButton)

  getByText('onDelete')
})
