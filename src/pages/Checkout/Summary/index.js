import React, { useState } from "react";
const Summary = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("cart")));

  let total = 0;
  data.forEach((item) => {
    total += item.price * item.quantity;
  });



  return (
    <div class="checkout-summary">
      <h4>Giỏ Hàng</h4>
      {data.length ? data.map((item) => (
        <div class="checkout-summary-product">
          <div>
            <img
              src="https://i.pinimg.com/736x/7c/92/7b/7c927b0f5528e457fe2dd9033521a825.jpg"
              alt=""
            />
          </div>
          <div>{item.name}</div>
          <div>
            {(item.price * item.quantity).toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}{" "}
            (Số lượng: {item.quantity})
          </div>
        </div>
      )): <div>Vui lòng chọn món</div>}
      <div class="checkout-summary-total">
        <div class="flex-box">
          <h5>Thành tiền:</h5>
          <span>
            {total.toLocaleString("vi", { style: "currency", currency: "VND" })}
          </span>
        </div>
        <div class="flex-box">
          <h5>Tiền ship:</h5>
          <span>0đ</span>
        </div>
        <div class="flex-box">
          <h5>Tổng cộng:</h5>
          <span>
            {total.toLocaleString("vi", { style: "currency", currency: "VND" })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
