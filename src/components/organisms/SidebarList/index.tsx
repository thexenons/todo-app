import classes from './SidebarList.module.scss'
import List from '@molecules/List'
import { ListType } from 'src/types/lists'
import { useActivateList, useAddList, useDeleteList, useLists } from '@hooks/lists'

const SidebarList = (): JSX.Element => {
  const lists: ListType[] = useLists()
  const activateList = useActivateList()
  const addList = useAddList()
  const deleteList = useDeleteList()

  return (
    <aside className={classes.sidebarList}>
      <h3>My lists</h3>
      <List interactiveActive items={lists} onActivate={activateList} onAdd={addList} onDelete={deleteList} />
    </aside>
  )
}

export default SidebarList
