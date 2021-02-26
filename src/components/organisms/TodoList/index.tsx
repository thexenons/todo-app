import List from '@molecules/List'
import TodoListActions from '@molecules/TodoListActions'
import Card from '@objects/Card'
import { CSSTransition } from 'react-transition-group'

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
      <CSSTransition in={!!activeList} timeout={0} classNames="fade-scale">
        <div className={classes['todoList-card']}>
          <Card title={activeList?.title || ''} subtitle={!!activeList && `Tasks remaining (${remainingItems})`}>
            {activeList && (
              <List items={activeList?.items || []} interactive enableItemSeparators onAdd={addItem} onDelete={deleteItem} onComplete={completeItem} />
            )}
          </Card>
          <TodoListActions />
        </div>
      </CSSTransition>
      <CSSTransition in={!activeList} timeout={0} classNames="fade-scale">
        <div className={classes.selectList}>
          <div>
            <span>↑</span> Select a item from the list
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default TodoList
