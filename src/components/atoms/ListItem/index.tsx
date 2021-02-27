import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import cn from 'classnames'
import { useRef } from 'react'
import { ListItemType } from 'src/types/lists'

import classes from './ListItem.module.scss'

const ListItem = ({ title, completed, active, onClick, onDelete }: ListItemType): JSX.Element => {
  const listItemRef = useRef<HTMLLIElement>(null)

  return (
    <li ref={listItemRef} className={cn(classes.listItem, { [classes.completed]: completed, completed, active })} onClick={onClick}>
      <span className={classes['listItem-text']}>{title}</span>
      {onDelete && (
        <span
          className={classes.deleteButton}
          onClick={(e) => {
            e.stopPropagation()
            listItemRef.current?.classList.add(classes['listItem--deleting'])
            setTimeout(() => {
              onDelete?.()
            }, 300)
          }}
          title="Delete"
        >
          <DeleteForeverIcon />
        </span>
      )}
    </li>
  )
}

export default ListItem
