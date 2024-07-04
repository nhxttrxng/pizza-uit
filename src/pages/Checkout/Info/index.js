import React from "react";

const Info = () => {
  return (
    <div className="checkout-info">
      <h4>Thông tin giao hàng</h4>
      <input type="text" class="input" placeholder="Họ tên" />
      <input type="text" class="input" placeholder="Số điện thoại" />
      <input type="text" class="input" placeholder="Địa chỉ" />
      <input type="text" class="input" placeholder="Quận" />
      <input type="text" class="input" placeholder="Phường" />
      <input type="text" class="input" placeholder="Note" />
      <h4>Phương thức thanh toán</h4>
      <div></div>
      <div class="method-box">
        <div>
          <input type="radio" id="COD" name="method" value="COD" /> Thanh toán
          khi nhận
        </div>
        <div>
          <input type="radio" id="Card" name="method" value="card" /> Chuyển
          khoản
          <pre>
            Thông tin chuyển khoản
            STK: 012345678 - ACB - TRAN VAN A
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Info;
