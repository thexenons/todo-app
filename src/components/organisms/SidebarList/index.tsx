import { useActivateList, useAddList, useDeleteList, useLists } from '@hooks/lists'
import List from '@molecules/List'
import { ListType } from 'src/types/lists'

import classes from './SidebarList.module.scss'

const SidebarList = (): JSX.Element => {
  const lists: ListType[] = useLists()
  const activateList = useActivateList()
  const addList = useAddList()
  const deleteList = useDeleteList()

  return (
    <aside className={classes.sidebarList}>
      <div>
        <h3>My lists</h3>
        <List interactiveActive items={lists} onActivate={activateList} onAdd={addList} onDelete={deleteList} />
      </div>
    </aside>
  )
}

export default SidebarList
