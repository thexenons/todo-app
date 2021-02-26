import classes from './List.module.scss'
import ListItem from '@atoms/ListItem'
import cn from 'classnames'
import { ListItemType, ListType } from 'src/types/lists'
import Input from '@atoms/Input'
import { useCallback } from 'react'
import AddIcon from '@material-ui/icons/Add'

type ListProps = {
  enableItemSeparators?: boolean
  interactive?: boolean
  items?: ListItemType[]
  interactiveActive?: boolean
  onAdd?: (value: string) => void // eslint-disable-line
  onDelete?: (index: number) => void // eslint-disable-line
  onComplete?: (index: number) => void // eslint-disable-line
  onActivate?: (index: number, item?: ListItemType | ListType) => void // eslint-disable-line
}

const List = ({ enableItemSeparators, interactive, interactiveActive, items, onAdd, onDelete, onComplete, onActivate }: ListProps): JSX.Element => {
  const handleItemClick = useCallback(
    (index: number, item: ListItemType) => {
      if (interactive && onComplete) {
        onComplete(index)
      } else if (interactiveActive && onActivate) {
        onActivate(index, item)
      }
    },
    [onComplete, onActivate, interactive, interactiveActive]
  )

  return (
    <div>
      <ul className={cn({ ['with-separators']: enableItemSeparators, interactive, 'interactive-active': interactiveActive })}>
        {items?.map((item, index) => (
          <ListItem key={index} onClick={() => handleItemClick(index, item)} onDelete={() => onDelete?.(index)} {...item} />
        ))}
      </ul>
      {onAdd && (
        <div className={classes['input-wrapper']}>
          <span>
            <AddIcon />
          </span>
          <Input onChange={onAdd} placeholder="Enter new task" />
        </div>
      )}
    </div>
  )
}

export default List
