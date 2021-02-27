import { ReactChild } from 'react'

import classes from './Container.module.scss'

type ContainerProps = {
  children: ReactChild | ReactChild[]
}

const Container = ({ children }: ContainerProps): JSX.Element => <div className={classes.container}>{children}</div>

export default Container
