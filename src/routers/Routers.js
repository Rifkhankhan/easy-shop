import { Route, Routes } from 'react-router-dom'
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
import Clothes from '../Pages/Clothes/Clothes'
import Shoes from '../Pages/Shoes/Shoes'
import Electronics from '../Pages/Electroics/Electronics'

// owner shop
import ShopDashboard from '../OwnerShop/Pages/Dashboard/Dashboard'
import ShopDashboardComponent from '../OwnerShop/Components/ShopDashboardComponent/ShopDashboardComponent'
import ProductsComponent from '../OwnerShop/Components/ProductsComponent/ProductsComponent'
import CreateProduct from '../OwnerShop/Components/CreateFruitComponent/CreateFruitComponent'
import ViewProduct from '../OwnerShop/Components/ViewProduct/ViewProduct'

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/Mobiles" element={<Mobiles />} />
			<Route path="/Fruits" element={<Fruits />} />
			<Route path="/Shoes" element={<Shoes />} />
			<Route path="/Electronics" element={<Electronics />} />
			<Route path="/Clothes" element={<Clothes />} />
			<Route path="/Meals" element={<Meals />} />
			<Route path="/Fruits/:id" element={<ProductDetails />} />
			<Route path="/Shops" element={<Shops />} />
			<Route path="/Shops/:id" element={<ShopDetails />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/setting" element={<Setting />} />
			<Route path="/searched" element={<SearchedProducts />} />

			{/* Shops owner pages */}
			<Route path="/owner" element={<ShopDashboard />}>
				<Route index element={<ShopDashboardComponent />} />
				<Route path="products" element={<ProductsComponent />} />
				<Route path="create-product" element={<CreateProduct />} />
				<Route path="products/:id" element={<ViewProduct />} />
				{/* <Route path="/view-product" element={<Dashboard />} /> */}
				{/* <Route path="/pending-products" element={<PendingListPage />} /> */}
				{/* <Route path="/processing-products" element={<ProcessingListPage />} /> */}
				{/* <Route path="/cancel-products" element={<CancelListPage />} /> */}
				{/* <Route path="/return-products" element={<ReturnListPage />} /> */}
			</Route>

			{/* <Route path="/netflix/profile" element={<NetflixProfile />}>
					<Route index element={<Movies />} />
					<Route path="movies" element={<Movies />} />
					<Route path="series" element={<Series />} />
					<Route path="users" element={<Users />} />
					<Route path="likes" element={<LikesComponents />} />
					<Route path="unlikes" element={<DisLikeComponents />} />
					<Route path="yourVideos" element={<YourVideosComponent />} />
					<Route path="downloads" element={<DownloadsComponent />} />
					<Route path="watchLater" element={<WatchLaterComponent />} />
					<Route path="category" element={<AddCategory />} />
					<Route path="*" element={<Series />} />
				</Route> */}
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
