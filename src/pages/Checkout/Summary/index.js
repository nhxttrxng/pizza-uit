import React from "react";

const Summary = () => {
    return (
        <div class="checkout-summary">
            <h4>Giỏ Hàng</h4>
            <div class="checkout-summary-product">
                <div >
                <img src="https://i.pinimg.com/736x/7c/92/7b/7c927b0f5528e457fe2dd9033521a825.jpg" alt="" />
                </div>
                <div>Pizza Gà Nấm</div>
                <div>200.000</div>
            </div>

            <div class="checkout-summary-product">
                <div >
                <img src="https://i.pinimg.com/736x/7c/92/7b/7c927b0f5528e457fe2dd9033521a825.jpg" alt="" />
                </div>
                <div>Pizza Gà Nấm</div>
                <div>200.000</div>
            </div>

            <div class="checkout-summary-total">
                <div class="flex-box">
                    <h5>Thành tiền:</h5>
                    <span>400.000đ</span>
                </div>
                <div class="flex-box">
                    <h5>Tiền ship:</h5>
                    <span>0đ</span>
                </div>
                <div class="flex-box">
                    <h5>Tổng cộng:</h5>
                    <span>400.000đ</span>
                </div>
            </div>

        </div>
    );
};

export default Summary;
