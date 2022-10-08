import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

//components
import { Home, NotFound } from './Components/default'
import Header from './Components/Header/Header'
import DetailView from './Components/ItemDetails/DetailView'
import TemplateProvider from './TemplateProvider'
import ContextProvider from './ContextProvider'
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App
