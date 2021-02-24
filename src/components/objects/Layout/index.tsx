import { ReactChild } from 'react'

type LayoutProps = {
  children: ReactChild[]
}

const Layout = ({ children }: LayoutProps): JSX.Element => <div>{children}</div>

export default Layout
