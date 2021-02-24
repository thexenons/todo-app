import { ReactChild } from 'react'
import classes from './Card.module.scss'

type CardProps = {
  children: ReactChild | ReactChild[]
  title?: string
  subtitle?: string
}

const Card = ({ children, title, subtitle }: CardProps): JSX.Element => (
  <div className={classes.card}>
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
