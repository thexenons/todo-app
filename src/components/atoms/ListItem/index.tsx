import { ReactChild } from 'react'
import cn from 'classnames'
import classes from './ListItem.module.scss'

type ListItemProps = {
  children: ReactChild
  enableItemSeparator?: boolean
}

const ListItem = ({ children, enableItemSeparator }: ListItemProps): JSX.Element => (
  <li className={cn(classes.listItem, { [classes['listItem--with-separators']]: enableItemSeparator })}>{children}</li>
)

export default ListItem
