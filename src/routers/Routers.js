import {  Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Mobiles from '../Pages/Mobiles/Mobiles'
import Shops from '../Pages/Shops/Shop'
import ShopDetails from '../Pages/Shops/ShopDetails/ShopDetails'
import Fruits from '../Pages/Fruits/Fruits'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'
import Dashboard from '../Admin/Pages/Dashboard/Dashboard'
import AdminShop from '../Admin/Pages/Shop/Shop'
import AdminFruit from '../Admin/Pages/Fruit/Fruit'
import AdminPhone from '../Admin/Pages/Phone/Phone'
import CreateShop from '../Admin/Pages/Shop/CreateShop/CreateShop'
import CreatePhone from '../Admin/Pages/Phone/CreatePhone/CreatePhone'
import CreateFruit from '../Admin/Pages/Fruit/CreateFruit.js/CreateFruit'
import Profile from '../Pages/Profile/Profile'
import Setting from '../Pages/Setting/Setting'


import PendingListPage from '../Admin/Pages/PendingListPage/PendingListPage'
import ProcessingListPage from '../Admin/Pages/ProcessingListPage/ProcessingListPage'
import CancelListPage from '../Admin/Pages/CancelListPage/CancelListPage'
import ReturnListPage from '../Admin/Pages/ReturnListPage/ReturnListPage'
import Meals from '../Pages/Meals/Meals'
import SearchedProducts from '../Pages/SearchedProducts/SearchedProducts'



const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/Mobiles" element={<Mobiles />} />
			<Route path="/Fruits" element={<Fruits />} />
			<Route path="/Meals" element={<Meals />} />
			<Route path="/Fruits/:id" element={<ProductDetails />} />
			<Route path="/Shops" element={<Shops />} />
			<Route path="/Shops/:id" element={<ShopDetails />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/setting" element={<Setting />} />
			<Route path="/searched" element={<SearchedProducts />} />




			{/* admin */}
			<Route path="/admin-home" element={<Dashboard />} />
			<Route path="/admin-shop" element={<AdminShop />} />
			<Route path="/create-shop" element={<CreateShop />} />

			<Route path="/admin-fruit" element={<AdminFruit />} />
			<Route path="/create-fruit" element={<CreateFruit />} />
			<Route path="/admin-fruit/:id" element={<ProductDetails />} />

			<Route path="/admin-phone" element={<AdminPhone />} />
			<Route path="/create-phone" element={<CreatePhone />} />

			<Route path="/admin-pending" element={<PendingListPage />} />
			<Route path="/admin-processing" element={<ProcessingListPage />} />
			<Route path="/admin-cancel" element={<CancelListPage />} />
			<Route path="/admin-return" element={<ReturnListPage />} />

		</Routes>
	)
}

export default Routers
