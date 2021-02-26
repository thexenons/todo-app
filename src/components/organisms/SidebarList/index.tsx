import classes from './SidebarList.module.scss'
import List from '@molecules/List'
import { ListType } from 'src/types/lists'
import { useActivateList, useAddList, useLists } from '@hooks/lists'

const SidebarList = (): JSX.Element => {
  const lists: ListType[] = useLists()
  const activateList = useActivateList()
  const addList = useAddList()

  return (
    <aside className={classes.sidebarList}>
      <h3>My lists</h3>
      <List interactiveActive items={lists} onActivate={activateList} onAdd={addList} />
    </aside>
  )
}

export default SidebarList
