import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { Table } from "react-bootstrap";

const HistoryPage = () => {
  const { order } = useContext(AuthContext);
  return (
    <div className="pageWrapper">
      <div className="payment">
        <div style={{ width: "50%", fontSize: 24, fontWeight: 500 }}>
          주문 내역
        </div>

        <br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>주문 번호</th>
              <th>총 주문 가격</th>
              <th>주문 일시</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.totPrice}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default HistoryPage;
