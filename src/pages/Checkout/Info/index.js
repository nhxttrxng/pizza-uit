import React, { useState } from "react";
import showNoti from '../../../component/notification'

const Info = () => {
  const checkValidOrder = () => {
    if(name && phone && address && district && ward && JSON.parse(localStorage.getItem('cart')).length){
      showNoti('Order Success', 'success')
      localStorage.setItem('cart', JSON.stringify([]))
    }
    else if(!JSON.parse(localStorage.getItem('cart')).length){
      showNoti('Please choose some products', 'danger')

    }
    else{
      showNoti('Please fill your information', 'danger')
    }
  };

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [district,setDistrict] = useState('')
  const [ward,setWard] = useState('')
  return (
    <div className="checkout-info">
      <h4>Thông tin giao hàng</h4>
      <input type="text" class="input" value={name} placeholder="Họ tên" onChange={(e)=>setName(e.target.value)} />
      <input type="text" class="input" value={phone} placeholder="Số điện thoại" onChange={(e)=>setPhone(e.target.value)} />
      <input type="text" class="input" value={address} placeholder="Địa chỉ" onChange={(e)=>setAddress(e.target.value)} />
      <input type="text" class="input" value={district} placeholder="Quận" onChange={(e)=>setDistrict(e.target.value)} />
      <input type="text" class="input" value={ward} placeholder="Phường" onChange={(e)=>setWard(e.target.value)}  />
      <input type="text" class="input" placeholder="Note" />
      <h4>Phương thức thanh toán</h4>
      <div></div>
      <div class="method-box">
        <div>
          <input type="radio" id="COD" name="method" value="COD" checked /> Thanh toán
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

      <div>
        <button class={`checkout-btn`} onClick={checkValidOrder}>
          Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default Info;
