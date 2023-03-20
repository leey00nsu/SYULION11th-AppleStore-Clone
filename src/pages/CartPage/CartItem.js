import { AuthContext } from "../../store/AuthContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { addItem, minusItem, removeItem } = useContext(AuthContext);

  const addItemHandler = () => {
    addItem(item);
  };
  const minusItemHandler = () => {
    minusItem(item);
  };
  const removeItemHandler = () => {
    removeItem(item);
  };
  return (
    <div className="item">
      <div className="image">
        <img style={{ height: "100%" }} src={item.thumbnail} alt="" />
      </div>
      <div className="description">
        <span>{item.name}</span> <span>Bball High</span> <span>White</span>
      </div>
      <div className="quantity">
        <button
          onClick={addItemHandler}
          className="plus-btn"
          type="button"
          name="button"
        >
          +
        </button>
        <input type="text" readOnly name="name" value={item.quantity} />
        <button
          onClick={minusItemHandler}
          className="minus-btn"
          type="button"
          name="button"
        >
          -
        </button>
      </div>
      <div className="total-price">₩{item.price * item.quantity}</div>
      <div className="buttons" onClick={removeItemHandler}>
        <span className="delete-btn">X</span>
      </div>
    </div>
  );
};

export default CartItem;
