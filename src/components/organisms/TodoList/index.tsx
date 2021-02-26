import List from '@molecules/List'
import TodoListActions from '@molecules/TodoListActions'
import Card from '@objects/Card'
import { useActiveList, useAddItemToActiveList, useCompleteItemToActiveList, useDeleteItemToActiveList, useRemainingItems } from '../../../hooks/lists'

import classes from './TodoList.module.scss'

const TodoList = (): JSX.Element => {
  const activeList = useActiveList()
  const addItem = useAddItemToActiveList()
  const deleteItem = useDeleteItemToActiveList()
  const completeItem = useCompleteItemToActiveList()
  const remainingItems = useRemainingItems()

  return (
    <div className={classes.todoList}>
      {activeList ? (
        <>
          <Card title={activeList.title} subtitle={`Tasks remaining (${remainingItems})`}>
            <List items={activeList.items} interactive enableItemSeparators onAdd={addItem} onDelete={deleteItem} onComplete={completeItem} />
          </Card>
          <TodoListActions />
        </>
      ) : (
        <div className={classes.selectList}>
          <div>
            <span>↑</span> Select a item from the list
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoList
