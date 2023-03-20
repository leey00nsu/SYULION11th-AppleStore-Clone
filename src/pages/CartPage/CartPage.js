import { AuthContext } from "../../store/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart } = useContext(AuthContext);
  let totPrice = 0;

  if (cart) {
    totPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }
  return (
    <div className="pageWrapper">
      <div className="shopping-cart">
        <h1 className="title">장바구니</h1>

        <div className="shopping-cart-body" style={{ minHeight: 100 }}>
          {cart && cart.length > 0 ? (
            cart.map((item, index) => {
              return <CartItem key={item._id} item={item} index={index} />;
            })
          ) : (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              카트에 상품이 하나도 없습니다.
            </p>
          )}
        </div>

        {cart && cart.length > 0 && (
          <div className="bottom">
            <span className="total-price">총 금액:₩{totPrice}</span>
            <button
              style={{ float: "right", padding: "4px 8px" }}
              onClick={() => navigate("/payment")}
            >
              결제
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
