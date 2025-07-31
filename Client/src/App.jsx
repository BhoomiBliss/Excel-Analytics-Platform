
import './App.css'
import { Navbar } from './Componets/Navbar'
import { Home } from './Page/Home'
import RegisterPage from './Page/Registerd'
import LoginPage from './Page/login'

import './index.css'



export function App() {
 

  return (
    <>
    <div>
      <RegisterPage/>
      <LoginPage/>
      <Navbar/>
      <Home/>
    

    </div>
      
    </>
  )
}


