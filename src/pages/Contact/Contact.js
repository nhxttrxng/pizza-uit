import React from "react";
import HeadLine from "../../component/Headline/Headline";
import { Container } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
const Contact = () => {
    return (
        <div className="contact">
            <Container>
                <HeadLine headline={"Liên hệ với chúng tôi"}></HeadLine>
                <div className="contact-information">
                    <div className="contact-information_text">
                        <h2>Pizza Group 7B from UIT 2024</h2>
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li>
                            <a href="https://maps.app.goo.gl/9bxnN5UUarjkzHkc6" target="_blank">
                                Địa chỉ CN1: <span>Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Hồ Chí Minh </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/9bxnN5UUarjkzHkc6" target="_blank">
                                Địa chỉ CN2: <span>Đường Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Hồ Chí Minh </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0913471351 ">
                                Hotline: <span>0913471351 </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
