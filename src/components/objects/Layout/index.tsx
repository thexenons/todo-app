import AppTitle from '@molecules/AppTitle'
import Container from '@objects/Container'
import { ReactChild } from 'react'
import classes from './Layout.module.scss'

type LayoutProps = {
  children: ReactChild[]
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={classes.layout}>
    <AppTitle />
    <Container>
      <div className={classes.content}>{children}</div>
    </Container>
  </div>
)

export default Layout
