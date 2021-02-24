import classes from './Container.module.scss'
import { ReactChild } from 'react'

type ContainerProps = {
  children: ReactChild | ReactChild[]
}

const Container = ({ children }: ContainerProps): JSX.Element => <div className={classes.container}>{children}</div>

export default Container
