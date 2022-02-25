//React Imports

import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import AboutUsPage from "./components/core/AboutUsPage";
import ContactUsPage from "./components/core/ContactUsPage";
import HomePage from "./components/core/HomePage";
import NotFoundPage from "./components/core/NotFoundPage";
import Navigation from "./components/shared/Navigation";
import LoginPage from "./components/users/LoginPage";
import SignUpPage from "./components/users/SignUpPage";

//User
import UserProtectedRoutes from "./components/routes/UserProtectedRoutes";
import UserDashboardPage from "./pages/users/DashboardPage";
import UserLogoutPage from "./pages/users/LogoutPage";
import CategoryNavigation from "./components/shared/CategoryNaviagation";
import AddProducts from "./components/core/AddProducts";

//Admin
import AdminProtectedRoutes from "./components/routes/AdminProtectedRoutes";
import AdminLoginPage from "./pages/admin/AdminLoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      {/* <CategoryNavigation /> */}

      <Switch>
        {/* Core Router */}

        <Route path="/" component={HomePage} exact />
        <Route path="/about-us" component={AboutUsPage} exact />
        <Route path="/contact-us" component={ContactUsPage} exact />
        <Route path="/addproduct" component={AddProducts} exact />

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
    </BrowserRouter>
  );
};

export default App;
