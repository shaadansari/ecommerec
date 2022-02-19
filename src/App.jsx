import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
// import Footer from "./Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/product";
import ProductDetail from "./pages/ProductDetail";
import WishlistPage from "./pages/WishlistPage";
function App() {
  return (
    <React.Fragment>
      <div className="app-div">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/wishlist">
            <WishlistPage />
          </Route>
          <Route exact path="/:category">
            <Product />
          </Route>
          <Route exact path="/:category/:type">
            <Product />
          </Route>
          <Route path="/:category/:type/:id-detailpage">
            <ProductDetail />
          </Route>
        </Switch>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default App;
