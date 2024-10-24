import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Login from "../Login/Login";

const Navbar = ({ cart }) => {
  //pass cart prop
  const [cartCount, setCartCount] = useState(0); //initial state for cart on nav

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    //update count
    setCartCount(count);
  }, [cart, cartCount]);

  
  return (
    //navbar with links to different pages
    <div className={styles.navbar}>
      
      <Link to="/">
        <h1 className={styles.navbar__logo}>
          The Plant <br /> Shop
        </h1>
      </Link>

      <Link to="/products">
        <h3 className={styles.navbar__links}>Products</h3>
      </Link>
      <Link to="/register">
        <h3 className={styles.navbar__links}>Sign Up</h3>
      </Link>
      <Link to="/Contact">
        <h3 className={styles.navbar__links}>Contact</h3>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <FontAwesomeIcon
            className={styles.cart__image}
            icon={faCartShopping}
          />

          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
<Login/>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
