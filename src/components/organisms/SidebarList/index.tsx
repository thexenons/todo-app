import classes from './SidebarList.module.scss'
import List from '@molecules/List'

const items = [
  {
    children: '1',
    active: true
  },
  {
    children: '2'
  },
  {
    children: '3'
  },
  {
    children: '4'
  }
]

const SidebarList = (): JSX.Element => (
  <aside className={classes.sidebarList}>
    <h3>My lists</h3>
    <List interactiveActive items={items} />
  </aside>
)

export default SidebarList
