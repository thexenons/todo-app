import { ReactChild } from 'react'
import classes from './Layout.module.scss'

type LayoutProps = {
  children: ReactChild[]
}

const Layout = ({ children }: LayoutProps): JSX.Element => <div className={classes.layout}>{children}</div>

export default Layout
