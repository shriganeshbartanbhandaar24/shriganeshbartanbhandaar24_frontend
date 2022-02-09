import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "./components/core/AboutUsPage";
import ContactUsPage from "./components/core/ContactUsPage";
import HomePage from "./components/core/HomePage";
import NotFoundPage from "./components/core/NotFoundPage";
import Navigation from "./components/shared/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        {/* Core Router */}

        <Route path="/" component={HomePage} exact />
        <Route path="/about-us" component={AboutUsPage} exact />
        <Route path="/contact-us" component={ContactUsPage} exact />

        {/* Not Found Page */}
        <Route path="*" component={NotFoundPage} exact={true} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
