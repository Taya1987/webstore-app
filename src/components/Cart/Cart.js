import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => { //passing cart prop
  {/*creating states for cart and shipment*/}
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [setShipment] = useState("");

  useEffect(() => {
    let items = 0;
    let price = 0;


    cart.forEach((item) => {
      items += item.qty; //calculating total qty 
      price += item.qty * item.price; //calculating total price
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {/*Creating cart page summary*/}
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>R {totalPrice}</span></div>
          <div className={styles.summary__shipping}>
          {/*Including shipment details with options */}
          <span>Select Shipment </span>

          <select onChange={(e) => setShipment(e.target.value)}>
            <option value="standard">Standard</option>
            <option value="express">Express</option>
          </select>
        
        </div>
{/*Proceed to check out- which is not functional at the moment*/}
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
