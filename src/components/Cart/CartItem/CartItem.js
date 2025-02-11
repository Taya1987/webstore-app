import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../Redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => { //passing necessary props to cartItem
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => { //event to update qty in cart item
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>R {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler} //adjust qty in cart 
          />
        </div>

        <FontAwesomeIcon
          className={styles.actions__deleteItemBtn}
          icon={faTrashCan}
          onClick={() => removeFromCart(item.id)} //remove from cart
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => { //update state of cart item 
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
