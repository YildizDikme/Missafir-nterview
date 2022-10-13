import React from 'react'
import { useRoutes } from "react-router-dom";
import DataProvider from './state'
import Routes from './routes'

const App = () => {
  let element = useRoutes(Routes);

  return (
    <DataProvider>
      {element}
    </DataProvider>
  )
}

export default App;
