import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Categories from '../Categories'
import Products from '../Products'
import Users from '../Users'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import '../../App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/categories', element: <Categories /> },
    { path: '/users', element: <Users /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  
  return routes
}

function App() {
  return (
    <>
    <BrowserRouter style={{ margin: '200px 200px 200px 200px' }}>
      <Sidebar />
      <Navbar />
      <div 
        className="min-h-screen"
        style={{ backgroundColor: "#F0F2F5" }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
