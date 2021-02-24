import classes from './SidebarList.module.scss'
import List from '@molecules/List'

const SidebarList = (): JSX.Element => (
  <aside className={classes.sidebarList}>
    <h3>My lists</h3>
    <List />
  </aside>
)

export default SidebarList
