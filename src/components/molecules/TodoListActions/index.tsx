import { useCompletedItems, useDeleteCompletedItems, useDeleteList } from '@hooks/lists'
import classes from './TodoListActions.module.scss'
import cn from 'classnames'

const TodoListActions = (): JSX.Element => {
  const completedItems = useCompletedItems()
  const deleteCompletedItems = useDeleteCompletedItems()
  const deleteList = useDeleteList()

  return (
    <div className={classes.todoListActions}>
      <div className={cn({ [classes.disabled]: !completedItems })} onClick={deleteCompletedItems}>
        Clear completed tasks ({completedItems})
      </div>
      <div onClick={deleteList}>Delete list</div>
    </div>
  )
}

export default TodoListActions
