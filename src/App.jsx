import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NoPage from './pages/nopage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo';
import ScrollTop from './components/scrollTop/ScrollTop';
import AllProduct from './pages/allProduct/AllProduct';
import CartPage from './pages/cart/CartPage';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import UserDashBoard from './pages/user/UserDashBoard';
import AdminDashBoard from './pages/admin/AdminDashBoard';
import AddProductPage from './pages/admin/AddProductPage';
import UpadateProductPage from './pages/admin/UpadateProductPage';
import MyState from './context/MyState';
import { Toaster } from 'react-hot-toast';
import { ProdectedRouteForUser } from './protectedRoute/ProdectedRouteForUser';
import { ProdectedRouteForAdmin } from './protectedRoute/ProtectedRouterForAdmin';

const App = () => {
  return (
   <MyState>
    <BrowserRouter>
    <ScrollTop/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/*" element={<NoPage/>} />
      <Route path="/productinfo/:id" element={<ProductInfo/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/allproduct" element={<AllProduct/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/user-dashboard" element={
        <ProdectedRouteForUser>
          <UserDashBoard/>
        </ProdectedRouteForUser>
      } /> 
      <Route path="/admin-dashboard" element={
        <ProdectedRouteForAdmin>
        <AdminDashBoard/>
      </ProdectedRouteForAdmin>}
       />
      <Route path="/addproduct" element={
        <ProdectedRouteForAdmin>
          <AddProductPage/>
        </ProdectedRouteForAdmin>
      } />
      <Route path="/admin-dashboard/updateproduct/:id" element={
        <ProdectedRouteForAdmin>
          <UpadateProductPage/>
        </ProdectedRouteForAdmin>
      } />
    </Routes>
      <Toaster/>
    </BrowserRouter>
   </MyState>
  )
}

export default App;
