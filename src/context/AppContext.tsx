import React, { useContext } from 'react'

export interface AppContextType {
  menuOpened: boolean
  setMenuOpened: (value: boolean) => void | undefined
  theme: string
  setTheme: (value: string) => void | undefined
}

const defaultAppContext: AppContextType = {
  menuOpened: false,
  setMenuOpened: (value: boolean) => undefined,
  theme: 'light',
  setTheme: (value: string) => undefined,
}

export const AppContext = React.createContext<AppContextType>(defaultAppContext)
export const useAppContext = () => useContext(AppContext)
