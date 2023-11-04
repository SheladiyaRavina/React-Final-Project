import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Admin/AdminLogin';
import AdminRegister from './Admin/AdminRegister';
import AdminProduct from './Admin/AdminProduct';
import Layout from './Components/Layout';
import Home from './User/Home';
import Product from './User/Product';
import Register from './User/Register';
import Login from './User/Login';
import ProductDetails from './User/ProductDetails';
import Cart from './User/Cart'
import AdminLayout from './Admin/components/AdminLayout';
import Dashboard from './Admin/Dashborad';
import AdminBrand from './Admin/AdminBrand';
import AdminViewproduct from './Admin/AdminViewproduct';
import Users from './Admin/Users';
import UserDetails from './Admin/UserDetails';
import AdminSlider from './Admin/AdminSlider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/*user*/}
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user/product' element={<Product />}></Route>
          <Route path='/user/productdetails/:productId' element={<ProductDetails />}></Route>
          <Route path='/user/cart' element={<Cart />}></Route>
          <Route path='/user/register' element={<Register />}></Route>
          <Route path='/user/login' element={<Login />}></Route>
        </Route>
      {/*Admin*/}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='/admin/dashbord' element={<Dashboard/>}></Route>
          <Route path='/admin/brand' element={<AdminBrand />}></Route>
          <Route path='/admin/slider' element={<AdminSlider />}></Route>
          <Route path='/admin/product' element={<AdminProduct />}></Route>
          <Route path='/admin/viewproduct' element={<AdminViewproduct />}></Route>
          <Route path='/admin/user' element={<Users />}></Route>
          <Route path='/admin/userdetails/:userId' element={<UserDetails />}></Route>
        </Route>

        <Route path='/admin/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/admin/adminregister' element={<AdminRegister />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
