import classes from './TodoListActions.module.scss'

const TodoListActions = (): JSX.Element => (
  <div className={classes.todoListActions}>
    <div>Clear completed tasks (0)</div>
    <div>Delete list</div>
  </div>
)

export default TodoListActions
