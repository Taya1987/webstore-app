import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux"; //connects redux store
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Register from "./components/Registration/Register";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    
    <Router>
       
      <div className="app">
        {/*create routes for navbar element*/}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={!current ? <Navigate to="/" /> : <Home />} />
          <Route path="/product/:id" element={<SingleItem />} /> 
        </Routes>
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
