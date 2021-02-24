import List from '../../molecules/List'
import TodoListActions from '../../molecules/TodoListActions'

const TodoList = (): JSX.Element => (
  <div>
    <div>
        <h2>Active list</h2>
        <span>Tasks remaining</span>
    </div>
    <List />
    <TodoListActions />
  </div>
)

export default TodoList
