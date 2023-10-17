import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/page_register'
import LoginPage from './pages/page_login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>HealMind Home</h1>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/perfil' element={<h1>Perfil</h1>}></Route>
        <Route path='/asistentevirtual' element={<h1>Asistente Virtual</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App