import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/css/core.css'
import { Suspense, lazy } from 'react'
import Loader from './components/shared/Loader'
import Customized from './pages/Customized'
const CommonLayout = lazy(() => import('./layouts/Common'))
const AdminLayout = lazy(() => import('./layouts/Admin'))
const UserLayout = lazy(() => import('./layouts/User'))
const ProfileLayOut = lazy(() => import('./layouts/Profile'))
const Login = lazy(() => import('./pages/auth/Login'))
const SignUp = lazy(() => import('./pages/auth/SignUp'))
const UserHome = lazy(() => import('./pages/user/Home'))
const AdminDashBoard = lazy(() => import('./pages/admin/DashBoard'))
const Addresses = lazy(() => import('./pages/user/Addresses'))
const DashBoard = lazy(() => import('./pages/user/DashBoard'))
const BillingAddress = lazy(() => import('./pages/user/BillingAddress'))
const ShippingAddress = lazy(() => import('./pages/user/ShippingAddress'))
const AccountDetails = lazy(() => import('./pages/user/AccountDetails'))
const Downloads = lazy(() => import('./pages/user/Downloads'))
const MyOrders = lazy(() => import('./pages/user/MyOrders'))
const Users = lazy(() => import('./pages/admin/Users'))
const Themes = lazy(() => import('./pages/admin/Themes'))
const Gifts = lazy(() => import('./pages/admin/Gifts'))
const Orders = lazy(() => import('./pages/admin/Orders'))
const AccountSettings = lazy(() => import('./pages/admin/AccountSettings'))
const Compare = lazy(() => import('./pages/user/Compare'))
const AddGift = lazy(() => import('./components/admin/gifts/AddGift'))
const WishList = lazy(() => import('./pages/user/WishList'))
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/customized' element={<Customized />} />
            <Route element={<CommonLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
            </Route>
            <Route element={<UserLayout />}>
              <Route path='/' element={<UserHome />} />
            </Route>
            <Route element={<AdminLayout />}>
              <Route path='/admin' element={<AdminDashBoard />} />
              <Route path='/users' element={<Users />} />
              <Route path='/themes' element={<Themes />} />
              <Route path='/gifts' element={<Gifts />} />
              <Route path='/addGift' element={<AddGift />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/accountSetting' element={<AccountSettings />} />
            </Route>
            <Route element={<ProfileLayOut />}>
              <Route path='/dashboard' element={<DashBoard />} />
              <Route path='/addresses' element={<Addresses />} />
              <Route path='/addresses/billing' element={<BillingAddress />} />
              <Route path='/addresses/shipping' element={<ShippingAddress />} />
              <Route path='/accountDetails' element={<AccountDetails />} />
              <Route path='/myOrders' element={<MyOrders />} />
              <Route path='/downloads' element={<Downloads />} />
              <Route path='/compare' element={<Compare />} />
              <Route path='/wishlist' element={<WishList />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
