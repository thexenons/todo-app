import Container from '@objects/Container'
import { ReactChild } from 'react'

import classes from './Layout.module.scss'

type LayoutProps = {
  children: ReactChild[]
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={classes.layout}>
    <h1 className={classes['layout-title']}>Things to do</h1>
    <Container>
      <div className={classes['layout-content']}>{children}</div>
    </Container>
  </div>
)

export default Layout
