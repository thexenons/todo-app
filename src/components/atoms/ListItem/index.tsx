import cn from 'classnames'
import { ListItemType } from 'src/types/lists'
import classes from './ListItem.module.scss'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const ListItem = ({ title, completed, active, onClick, onDelete }: ListItemType): JSX.Element => (
  <li className={cn(classes.listItem, { completed, active })} onClick={onClick}>
    <span>{title}</span>
    {onDelete && (
      <span
        className={classes.deleteButton}
        onClick={(e) => {
          e.stopPropagation()
          onDelete?.()
        }}
      >
        <DeleteForeverIcon />
      </span>
    )}
  </li>
)

export default ListItem
