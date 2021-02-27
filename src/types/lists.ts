export type ListType = {
  key: string
  title: string
  items: ListItemType[]
  active?: boolean
}

export type ListItemType = {
  key: string
  title: string
  completed?: boolean
  active?: boolean
  deleting?: boolean
  onClick?: (...args: any) => void // eslint-disable-line
  onDelete?: (...args: any) => void // eslint-disable-line
}
