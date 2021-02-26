import { ListItemType } from 'src/types/lists'

export const getCompletedItems = (items: ListItemType[]): number =>
  items.reduce((acc, item) => {
    if (item.completed) acc++

    return acc
  }, 0)

export const getRemainingsItems = (items: ListItemType[]): number =>
  items.reduce((acc, item) => {
    if (!item.completed) acc++

    return acc
  }, 0)