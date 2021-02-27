import { getCompletedItems, getRemainingsItems } from '@utils/lists'
import { useContext } from 'react'
import { ListType } from 'src/types/lists'
import { v4 as uuidv4 } from 'uuid'

import { GlobalStateContext } from '../context/lists'

export const useLists = (): ListType[] => {
  const { globalState } = useContext(GlobalStateContext)

  return Object.values(globalState.lists).map((list) => {
    if (list.key === globalState.activeList) {
      return { ...list, active: true }
    }

    return list
  })
}

export const useActiveList = (): ListType => {
  const { globalState } = useContext(GlobalStateContext)

  return globalState.lists[globalState.activeList]
}

export const useActivateList = (): any => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext)

  return (index: number, item: ListType): void => {
    const newGlobalState = { ...globalState }

    newGlobalState.activeList = item.key

    setGlobalState(newGlobalState)
  }
}

export const useAddList = (): any => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext)

  return (value: string) => {
    const newGlobalState = { ...globalState }

    const uuid = uuidv4()
    newGlobalState.lists[uuid] = {
      key: uuid,
      title: value,
      items: [],
    }

    if (Object.keys(newGlobalState.lists).length === 1) newGlobalState.activeList = uuid

    setGlobalState(newGlobalState)
  }
}

export const useDeleteList = (): any => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext)

  return (_: number, item: ListType) => {
    const newGlobalState = { ...globalState }

    const deleteKey = item?.key || newGlobalState.activeList
    if (deleteKey === newGlobalState.activeList) newGlobalState.activeList = ''
    delete newGlobalState.lists[deleteKey]

    setGlobalState(newGlobalState)
  }
}

export const useRemainingItems = (): number => {
  const activeList = useActiveList()

  return activeList?.items ? getRemainingsItems(activeList.items) : 0
}

export const useCompletedItems = (): number => {
  const activeList = useActiveList()

  return activeList?.items ? getCompletedItems(activeList.items) : 0
}

export const useAddItemToActiveList = (): any => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext)

  return (value: string): void => {
    const newGlobalState = { ...globalState }
    const uuid = uuidv4()
    newGlobalState.lists[globalState.activeList].items.push({ key: uuid, title: value })

    setGlobalState(newGlobalState)
  }
}

export const useDeleteItemToActiveList = (): any => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext)

  return (index: number): void => {
    const newGlobalState = { ...globalState }
    newGlobalState.lists[globalState.activeList].items.splice(index, 1)

    setGlobalState(newGlobalState)
  }
}

export const useDeleteCompletedItems = (): any => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext)

  return () => {
    const newGlobalState = { ...globalState }

    newGlobalState.lists[globalState.activeList].items = newGlobalState.lists[globalState.activeList].items.map((item) => {
      if (item.completed) {
        return { ...item, deleting: true }
      }
      return item
    })

    setGlobalState(newGlobalState)

    setTimeout(() => {
      const newGlobalState = { ...globalState }
      newGlobalState.lists[globalState.activeList].items = newGlobalState.lists[globalState.activeList].items.filter((item) => !item.completed)
      setGlobalState(newGlobalState)
    }, 300)
  }
}

export const useCompleteItemToActiveList = (): any => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext)

  return (index: number): void => {
    const newGlobalState = { ...globalState }
    newGlobalState.lists[globalState.activeList].items[index].completed = !newGlobalState.lists[globalState.activeList].items[index].completed

    setGlobalState(newGlobalState)
  }
}
