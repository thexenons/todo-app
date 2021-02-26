import classes from './List.module.scss'
import ListItem, { ListItemProps } from '@atoms/ListItem'
import cn from 'classnames'

type ListProps = {
  enableItemSeparators?: boolean
  interactive?: boolean
  items?: ListItemProps[]
  interactiveActive?: boolean
}

const List = ({ enableItemSeparators, interactive, interactiveActive, items }: ListProps): JSX.Element => (
  <div>
    <ul className={cn({ ['with-separators']: enableItemSeparators, interactive, 'interactive-active': interactiveActive })}>
      {items?.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </ul>
    <div className={classes['input-wrapper']}>
      <span>+</span>
      <input type="text" />
    </div>
  </div>
)

export default List
