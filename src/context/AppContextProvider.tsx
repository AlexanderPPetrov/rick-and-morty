import React, { useState } from 'react'
import { AppContext, AppContextType } from './AppContext'

interface Props {
  children: React.ReactNode
}

const AppContextProvider = (props: Props) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>('light')
  const context: AppContextType = {
    menuOpened,
    setMenuOpened,
    theme,
    setTheme,
  }

  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
}

export default AppContextProvider
