import { useState, useContext } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";

const ProductInfo = (props) => {
  const navigate = useNavigate();
  const { item } = props;
  const [count, setCount] = useState(1);
  const { isAuth, addCart } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const quantityButtonHandler = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 1) return;
      setCount((prev) => prev - 1);
    }
  };

  const addCartHandler = () => {
    if (!isAuth) {
      alert("먼저 로그인 해주세요");
      navigate("/login");
    } else {
      const new_item = {
        ...item,
        quantity: count,
      };
      addCart(new_item);
      setShow(true);
      setTimeout(() => setShow(false), 2000);
    }
  };

  const buyHandler = () => {
    if (!isAuth) {
      alert("먼저 로그인 해주세요");
      navigate("/login");
    } else {
      const new_item = {
        ...item,
        quantity: count,
      };
      addCart(new_item);
      navigate("/user/cart");
    }
  };
  return (
    <div>
      {show && (
        <Alert variant="info">
          <Alert.Heading>상품이 장바구니에 담겼습니다.</Alert.Heading>
          <p>장바구니에서 확인해주세요.</p>
        </Alert>
      )}
      <p style={{ color: "#bf4800", marginBottom: 0 }}>New</p>
      <h1 style={{ marginBottom: 20 }}>{item.name} 구입하기</h1>
      <h5>
        {item.summary} 개별 판매 가격 {item.price}₩
      </h5>

      <div className="quantity">
        <p style={{ fontWeight: 600, marginBottom: 5 }}>수량</p>
        <button
          className="plus-btn"
          type="button"
          name="button"
          onClick={() => quantityButtonHandler("plus")}
        >
          +
        </button>
        <input type="text" readOnly name="name" value={count} />
        <button
          className="minus-btn"
          type="button"
          name="button"
          onClick={() => quantityButtonHandler("minus")}
        >
          -
        </button>
      </div>

      <br />
      <br />
      <h3>총 상품 금액: {item.price * count}원</h3>
      <div className="product-info-action" onClick={addCartHandler}>
        장바구니에 담기
      </div>
      <div className="product-info-action" onClick={buyHandler}>
        바로 구매
      </div>
    </div>
  );
};

export default ProductInfo;
