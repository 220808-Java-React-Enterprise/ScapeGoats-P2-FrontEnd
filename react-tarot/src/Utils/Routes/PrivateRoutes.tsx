import { Navigate, Outlet} from 'react-router-dom'


const PrivateRoutes = () => {
  
  
 let auth=localStorage.hasOwnProperty('auth-token')
 
  
  return (
    auth ? <Outlet/> : <Navigate to="/"/>
   
  )


  }

export default PrivateRoutes