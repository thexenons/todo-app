import List from '@molecules/List'
import TodoListActions from '@molecules/TodoListActions'
import Card from '@objects/Card'
import cn from 'classnames'

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
      <div className={cn(classes['todoList-card'], { [classes['todoList-card--hidden']]: !activeList })}>
        <Card title={activeList?.title || ''} subtitle={!!activeList && `Tasks remaining (${remainingItems})`}>
          {activeList && (
            <List items={activeList?.items || []} interactive enableItemSeparators onAdd={addItem} onDelete={deleteItem} onComplete={completeItem} />
          )}
        </Card>
        <TodoListActions />
      </div>
      <div className={cn(classes.selectList, { [classes['selectList--hidden']]: !!activeList })}>
        <div>
          <span>↑</span> Select a item from the list
        </div>
      </div>
    </div>
  )
}

export default TodoList
