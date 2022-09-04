//React Imports
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from "./components/core/Footer.js"

//Pages
import AboutUsPage from "./components/core/AboutUsPage"
import ContactUsPage from "./components/core/ContactUsPage"
import HomePage from "./components/core/HomePage"
import NotFoundPage from "./components/core/NotFoundPage"
import Navigation from "./components/shared/Navigation"
import LoginPage from "./components/users/LoginPage"
import SignUpPage from "./components/users/SignUpPage"

//User
import UserProtectedRoutes from "./components/routes/UserProtectedRoutes"
import UserDashboardPage from "./pages/users/DashboardPage"
import UserLogoutPage from "./pages/users/LogoutPage"
import CategoryNavigation from "./components/shared/CategoryNaviagation"
import AddProducts from "./components/core/AddProducts"

//Admin
import AdminProtectedRoutes from "./components/routes/AdminProtectedRoutes"
import AdminLoginPage from "./pages/admin/AdminLoginPage"
import ProductPage from "./pages/product/ProductPage"
import CartPage from "./pages/users/CartPage.js"
import ShippingPage from "./pages/users/ShippingPage.js"
import PaymentPage from "./pages/users/PaymentPage.js"
import PlaceOrderPage from "./pages/users/PlaceOrderPage.js"
import PaymentMethodPage from "./pages/users/PaymentMethodPage.js"
import { useEffect } from "react"
import OrderPage from "./pages/users/OrderPage.js"
import ShowOrders from "./pages/users/ShowOrders.js"
import UserListPage from "./pages/admin/UserListPage.js"
import ProductListPage from "./pages/admin/ProductListPage.js"

const App = () => {
  useEffect(() => {
    localStorage.removeItem("cartItems")
    localStorage.removeItem("paymentMethod")
    localStorage.removeItem("shippingAddress")
    localStorage.removeItem("userInfo")
  }, [])

  return (
    <BrowserRouter>
      <Navigation />
      {/* <CategoryNavigation /> */}

      <Switch>
        {/* Core Router */}

        <Route path="/" component={HomePage} exact />
        <Route path="/product/:id" component={ProductPage} exact />
        <Route path="/about-us" component={AboutUsPage} exact />
        <Route path="/contact-us" component={ContactUsPage} exact />
        <Route path="/addproduct" component={AddProducts} exact />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/shipping" component={ShippingPage} />
        <Route path="/payment" component={PaymentMethodPage} />
        <Route path="/placeOrder" component={PlaceOrderPage} />
        <Route path="/order/:id?" component={OrderPage} />
        <Route path="/showOrders" component={ShowOrders} />
        {/* Admin Routes */}
        <Route path="/admin/userlist" component={UserListPage} />
        <Route path="/admin/productlist" component={ProductListPage} />

        {/* User Registration */}
        <Route path="/users/login" component={LoginPage} exact />
        <Route path="/users/signup" component={SignUpPage} exact />

        {/* User Routes Action*/}
        <UserProtectedRoutes
          path="/users/logout"
          component={UserLogoutPage}
          exact
        />
        <UserProtectedRoutes
          path="/users/dashboard"
          component={UserDashboardPage}
          exact
        />
        <UserProtectedRoutes path="/cart/:id?" component={CartPage} exact />

        {/* Admin Protected Routes */}
        <AdminProtectedRoutes
          path="/admin/login"
          component={AdminLoginPage}
          exact
        />

        <AdminProtectedRoutes
          path="/admin/addproduct"
          component={AddProducts}
          exact
        />

        {/* Not Found Page */}
        <Route path="*" component={NotFoundPage} exact={true} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
