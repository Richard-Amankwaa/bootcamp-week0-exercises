import React from 'react'
import Everything from './Everything'
import { ThemeProvider } from 'styled-components'
import theme from './Theme'









const App = () => {
  
  
  return <ThemeProvider theme={theme}>

      <Everything />

    </ThemeProvider>
  
    
}

export default App
