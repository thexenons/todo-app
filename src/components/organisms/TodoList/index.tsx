import List from '@molecules/List'
import TodoListActions from '@molecules/TodoListActions'
import Card from '@objects/Card'

const TodoList = (): JSX.Element => (
  <div>
    <Card title="Active list" subtitle="Tasks remaining">
      <List enableItemSeparators />
    </Card>
    <TodoListActions />
  </div>
)

export default TodoList
