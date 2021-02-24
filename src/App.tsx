import './styles/global.scss'

import Layout from '@objects/Layout'
import SidebarList from '@organisms/SidebarList'
import TodoList from '@organisms/TodoList'

const App = (): JSX.Element => {
  return (
    <Layout>
      <SidebarList />
      <TodoList />
    </Layout>
  )
}

export default App
