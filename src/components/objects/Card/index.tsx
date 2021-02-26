import { ReactChild } from 'react'
import classes from './Card.module.scss'
import cn from 'classnames'

type CardProps = {
  children: ReactChild | ReactChild[]
  title?: string
  subtitle?: string
  hidden?: boolean
}

const Card = ({ children, title, subtitle, hidden }: CardProps): JSX.Element => (
  <div className={cn(classes.card, { [classes.hidden]: hidden })}>
    {(title || subtitle) && (
      <div className={classes['card-header']}>
        {title && <div className={classes['card-header-title']}>{title}</div>}
        {subtitle && <div className={classes['card-header-subtitle']}>{subtitle}</div>}
      </div>
    )}
    <div className={classes['card-content']}>{children}</div>
  </div>
)

export default Card
