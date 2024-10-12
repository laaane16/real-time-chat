import { Navigate } from "react-router-dom"
import Login from "../pages/Login"
import MainPage from "../pages/MainPage"

export default class Routes{
    
    static privateRoutes = [
        {path: '/login', element: <Login/>},
        {path: '*', element: <Navigate to = '/login'/>}
    ]
    
    static publicRoutes = [
        {path: '/', element: <MainPage/>},
        {path: '*', element: <Navigate to = '/'/>}
    ]
}