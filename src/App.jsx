
import Header from './Component/Header/Header'
import  Footer  from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function App() {


  return (
  <>
   <Header/>
   <Outlet/>
   <Footer/>
  
   </>
   
  )
}


