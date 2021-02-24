import classes from './TodoList.module.scss'
import List from '@molecules/List'
import TodoListActions from '@molecules/TodoListActions'
import Card from '@objects/Card'

const TodoList = (): JSX.Element => (
  <div className={classes.todoList}>
    <Card title="Active list" subtitle="Tasks remaining (0)">
      <List enableItemSeparators />
    </Card>
    <TodoListActions />
  </div>
)

export default TodoList
