import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  function generateRandomString(length) {
    var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("isAuth");
    const sessionCart = sessionStorage.getItem("cart");
    const sessionOrder = sessionStorage.getItem("order");
    if (sessionAuth === "true") {
      setIsAuth(true);
    }
    if (sessionCart) {
      setCart(JSON.parse(sessionCart));
    }
    if (sessionOrder) {
      setOrder(JSON.parse(sessionOrder));
    }
  }, []);

  const userLogin = (email, password) => {
    setIsAuth(true);
    sessionStorage.setItem("isAuth", "true");
    navigate("/");
  };

  const userLogout = () => {
    setIsAuth(false);
    sessionStorage.removeItem("isAuth");
    navigate("/");
  };

  const addCart = (item) => {
    const index = cart.findIndex((i) => i._id === item._id);
    if (index !== -1) {
      let newCart = [...cart];
      newCart[index].quantity += item.quantity;
      setCart(newCart);
      sessionStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      setCart((prev) => [...prev, item]);
      let sessionCart = JSON.parse(sessionStorage.getItem("cart"));
      if (sessionCart) {
        sessionCart = [...sessionCart, item];
      } else {
        sessionCart = [item];
      }
      sessionStorage.setItem("cart", JSON.stringify(sessionCart));
    }
  };

  const addItem = (item) => {
    const index = cart.findIndex((i) => i._id === item._id);
    let newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const minusItem = (item) => {
    const index = cart.findIndex((i) => i._id === item._id);
    let newCart = [...cart];
    newCart[index].quantity -= 1;
    if (newCart[index].quantity === 0) {
      newCart = newCart.filter((i) => i._id !== item._id);
    }
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (item) => {
    let newCart = [...cart];
    newCart = newCart.filter((i) => i._id !== item._id);
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addOrder = () => {
    let totPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    let newCart = {
      _id: generateRandomString(8),
      totPrice: totPrice,
      createdAt: new Intl.DateTimeFormat("ko", {
        dateStyle: "full",
        timeStyle: "medium",
      }).format(new Date()),
    };
    setOrder((prev) => [...prev, newCart]);
    let sessionOrder = JSON.parse(sessionStorage.getItem("order"));
    if (sessionOrder) {
      sessionOrder = [...sessionOrder, newCart];
    } else {
      sessionOrder = [newCart];
    }
    sessionStorage.setItem("order", JSON.stringify(sessionOrder));
    sessionStorage.removeItem("cart");
    setCart([]);
    navigate("/");
  };

  const AuthContextData = {
    isAuth,
    userLogin,
    userLogout,
    addCart,
    cart,
    addItem,
    minusItem,
    removeItem,
    addOrder,
    order,
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
