import React, { useContext } from 'react'

export interface AppContextType {
  menuOpened: boolean
  setMenuOpened: (value: boolean) => void | undefined
}

const defaultAppContext: AppContextType = {
  menuOpened: false,
  setMenuOpened: (value: boolean) => undefined,
}

export const AppContext = React.createContext<AppContextType>(defaultAppContext)
export const useAppContext = () => useContext(AppContext)
