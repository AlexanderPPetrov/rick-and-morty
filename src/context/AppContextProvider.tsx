import React, { useState } from 'react'
import { AppContext, AppContextType } from './AppContext'

interface Props {
  children: React.ReactNode
}

const AppContextProvider = (props: Props) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const context: AppContextType = {
    menuOpened,
    setMenuOpened,
  }

  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
}

export default AppContextProvider
