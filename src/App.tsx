import AppTitle from './components/molecules/AppTitle'
import Layout from './components/objects/Layout'
import SidebarList from './components/organisms/SidebarList'
import TodoList from './components/organisms/TodoList'
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
