import { createContext, ReactChild, useState } from 'react'
import { ListType } from 'src/types/lists'
import { v4 as uuidv4 } from 'uuid'

type GlobalStateValueType = {
  activeList: string
  lists: {
    [key: string]: ListType
  }
}

type GlobalStateType = {
  globalState: GlobalStateValueType
  setGlobalState: any
}

export const GlobalStateContext = createContext({} as GlobalStateType)

const uuid = uuidv4()
const initialState = {
  activeList: uuid,
  lists: {
    [uuid]: {
      key: uuid,
      title: 'Example Tasks',
      items: [
        {
          title: 'Completed Task',
          completed: true
        },
        {
          title: 'Not completed Task'
        }
      ],
    },
  },
}
const GlobalStateProvider = ({ children }: { children: ReactChild }): JSX.Element => {
  const [globalState, setGlobalState] = useState(initialState)

  return <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>{children}</GlobalStateContext.Provider>
}

export default GlobalStateProvider
