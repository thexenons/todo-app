import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { ListItemType } from 'src/types/lists'

import classes from './ListItem.module.scss'

const ListItem = ({ title, completed, active, deleting, onClick, onDelete }: ListItemType): JSX.Element => {
  const listItemRef = useRef<HTMLLIElement>(null)
  const [appeared, setAppeared] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAppeared(true)
    }, 16.67)
  }, [])

  return (
    <li
      ref={listItemRef}
      className={cn(classes.listItem, {
        [classes.completed]: completed,
        completed,
        active,
        [classes['listItem--appeared']]: appeared,
        [classes['listItem--deleting']]: deleting,
      })}
      onClick={onClick}
    >
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
