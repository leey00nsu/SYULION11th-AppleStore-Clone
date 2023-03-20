import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

const PaymentPage = () => {
  const open = useDaumPostcodePopup();

  const { cart, addOrder } = useContext(AuthContext);
  let totPrice = 0;

  if (cart) {
    totPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }

  const [isSame, setIsSame] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [name2, setName2] = useState("");
  const [mobile2, setMobile2] = useState("");

  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  const checkboxHandler = () => {
    if (isSame) {
      setIsSame(false);
      setName2("");
      setMobile2("");
    } else {
      setIsSame(true);

      setName2(name);
      setMobile2(mobile);
    }
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setPostcode(data.zonecode);
    setAddress(fullAddress);
    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const orderHandler = () => {
    addOrder();
  };
  return (
    <div className="pageWrapper">
      <div className="payment">
        <div
          style={{
            width: "100%",
            display: "flex",
            borderBottom: "1px solid #d2d2d7",
          }}
        >
          <div style={{ width: "50%", fontSize: 24, fontWeight: 500 }}>
            결제
          </div>
          <div style={{ width: "50%", display: "flex", justifyContent: "end" }}>
            주문 총 가격 : {totPrice + 3000}원 (3000원 배송비)
          </div>
        </div>
        <div style={{ marginTop: 16, width: "100%", display: "flex" }}>
          <div style={{ width: "49%" }}>
            <h5>주문자 정보</h5>
            <input
              value={name}
              type="text"
              name="full"
              placeholder="주문자명"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={mobile}
              type="text"
              name="mobile"
              placeholder="무선 연락처"
              onChange={(e) => setMobile(e.target.value)}
            />
            <div>
              <input
                onChange={checkboxHandler}
                checked={isSame}
                type="checkbox"
                id="sameInfo"
                name="sameInfo"
              />
              <label htmlFor="sameInfo">수취자 정보도 위와 동일합니다.</label>
            </div>
          </div>
          <div style={{ width: "2%" }} />
          <div style={{ width: "49%" }}>
            <h5>수취자 정보</h5>
            <input
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              type="text"
              name="full"
              placeholder="주문자명"
            />
            <input
              value={mobile2}
              onChange={(e) => setMobile2(e.target.value)}
              type="text"
              name="mobile"
              placeholder="무선 연락처"
            />

            <h5>배송 정보</h5>
            <input
              onClick={handleClick}
              type="text"
              readOnly
              placeholder="주소"
              value={address}
            />
            <input type="text" name="address2" placeholder="상세 주소" />
            <input
              value={postcode}
              type="text"
              readOnly
              placeholder="우편번호"
            />

            <h5>결제</h5>
            <select>
              <option>결제 수단 선택</option>
              <option>무통장 결제</option>
            </select>

            <button
              onClick={orderHandler}
              style={{ width: "100%", marginTop: 10 }}
            >
              주문
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
