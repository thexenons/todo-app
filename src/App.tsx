import './styles/global.scss'

import Layout from '@objects/Layout'
import SidebarList from '@organisms/SidebarList'
import TodoList from '@organisms/TodoList'

import GlobalStateProvider from './context/lists'

const App = (): JSX.Element => {
  return (
    <GlobalStateProvider>
      <Layout>
        <SidebarList />
        <TodoList />
      </Layout>
    </GlobalStateProvider>
  )
}

export default App
