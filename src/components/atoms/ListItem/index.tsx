import { ReactChild } from 'react'
import cn from 'classnames'

export type ListItemProps = {
  children: ReactChild
  completed?: boolean,
  active?: boolean,
}

const ListItem = ({ children, completed, active }: ListItemProps): JSX.Element => <li className={cn({ completed, active })}>{children}</li>

export default ListItem
