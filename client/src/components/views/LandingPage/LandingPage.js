import Sidebar from "../../sidebar/Sidebar";
import "../../App.css";
import Home from "../../../pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../../../pages/userList/UserList";
import User from "../../../pages/user/User";
import NewUser from "../../../pages/newUser/NewUser";
import ProductList from "../../../pages/productList/ProductList";
import Product from "../../../pages/product/Product";
import NewProduct from "../../../pages/newProduct/NewProduct";
import React from "react";

function LandingPage() {
  return (
    
      <div className="container">
        <Sidebar />
  
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route exact path="/dashboard/user">
            <UserList />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
      
      </div>
  );
}

export default LandingPage;
