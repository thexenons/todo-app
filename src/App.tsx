import './styles/global.scss'

import Layout from '@objects/Layout'
import SidebarList from '@organisms/SidebarList'
import TodoList from '@organisms/TodoList'
import { RecoilRoot } from 'recoil'
import GlobalStateProvider from './context/lists'

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <GlobalStateProvider>
        <Layout>
          <SidebarList />
          <TodoList />
        </Layout>
      </GlobalStateProvider>
    </RecoilRoot>
  )
}

export default App
