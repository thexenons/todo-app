import AppTitle from '@molecules/AppTitle'
import Layout from '@objects/Layout'
import SidebarList from '@organisms/SidebarList'
import TodoList from '@organisms/TodoList'
import './styles/global.scss'

const App = (): JSX.Element => {
  return (
    <Layout>
      <AppTitle />
      <SidebarList />
      <TodoList />
    </Layout>
  )
}

export default App
