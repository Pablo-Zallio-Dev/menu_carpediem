import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/homePage/Home'
import Menu from './pages/menu/components/organisms/Menu'



function App() {

      return (
            
            <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/menu' element={<Menu />} />
            </Routes>

               
      )
}

export default App
