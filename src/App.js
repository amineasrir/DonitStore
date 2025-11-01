import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./Components/Utility Components/Footer";
import NavBar from "./Components/Utility Components/NavBar";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AllCats from "./Pages/Category/Categories";
import BrandsPage from "./Pages/Brands/BrandsPage";
import ProductPage from "./Pages/Products/ProductPage";
import ProdsDetailsPage from "./Pages/Products/ProdsDetailsPage";
import CartPage from './Pages/Cart/CartPage';
import PayMethoudPage from './Pages/Checkout/PayMethoudPage';
import AdmAllProdsPage from './Pages/Admin/AdmAllProdsPage';
import AdmAllOrdersPage from './Pages/Admin/AdmAllOrdersPage';
import AdmOrdersDetalisPage from './Pages/Admin/AdmOrdersDetailsPage';
import AddBrandPage from './Pages/Admin/AddBrandPage';
import AddCategoryPage from './Pages/Admin/AddCategoryPage';
import AddSubCategoryPage from './Pages/Admin/AddSubCategoryPage';
import AddProductPage from './Pages/Admin/AddProductPage';
import UsrAllOrdersPage from './Pages/User/UsrAllOrdersPage';
import FavProdsPage from './Pages/User/FavProdsPage';
import MyAddressesPage from './Pages/User/MyAddressesPage';
import AddAddressPage from './Pages/User/AddAddressPage';
import EditAddressPage from './Pages/User/EditAddressPage';
import ProfilePage from './Pages/User/ProfilePage';


function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/category" element={<AllCats />}/>
          <Route path="/brand" element={<BrandsPage />}/>
          <Route path="/products" element={<ProductPage />}/>
          <Route path="/products/:id" element={<ProdsDetailsPage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/order/paymethoud" element={<PayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdmAllProdsPage />} />
          <Route path="/admin/allorders" element={<AdmAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdmOrdersDetalisPage />} />
          <Route path="/admin/addbrand" element={<AddBrandPage />} />
          <Route path="/admin/addcategory" element={<AddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AddProductPage />} />
          <Route path="/user/allorders" element={<UsrAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<FavProdsPage />} />
          <Route path="/user/addresses" element={<MyAddressesPage />} />
          <Route path="/user/add-address" element={<AddAddressPage />} />
          <Route path="/user/edit-address" element={<EditAddressPage />} />  
          <Route path="/user/profile" element={<ProfilePage />} />  

        </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App;
