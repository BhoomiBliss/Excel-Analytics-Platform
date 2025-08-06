
import './App.css'
import { Navbar } from './Componets/Navbar'
import ExcelDashboard from './Page/Dashboard'
import { Home } from './Page/Home'
import RegisterPage from './Page/Registerd'
import LoginPage from './Page/login'
import Upload from './Page/Upload'

import './index.css'



export function App() {
 

  return (
    <>
    <div>
     <Upload/>
      <RegisterPage/>
      <LoginPage/>
      <Navbar/>
      <Home/>
      <ExcelDashboard/>
    

    </div>
      
    </>
  )
}


