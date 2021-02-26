import classes from './TodoList.module.scss'
import List from '@molecules/List'
import TodoListActions from '@molecules/TodoListActions'
import Card from '@objects/Card'

const items = [
  {
    children: '1',
    completed: true
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

const TodoList = (): JSX.Element => (
  <div className={classes.todoList}>
    <Card title="Active list" subtitle="Tasks remaining (0)">
      <List items={items} interactive enableItemSeparators />
    </Card>
    <TodoListActions />
  </div>
)

export default TodoList
