import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        document.addEventListener("scroll", handleScroll);
    }, []);
    const handleOnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="footer">
            <div className="footer-top">
                <Row>
                    <Col md={4} lg={2}>
                        <div className="footer-branch">
                            <img className="footer-logo" src={logo} alt="" />
                            <div className="footer-social">
                                <h4>Follow us</h4>
                                <div className="footer-social_icon">
                                    <a href="">
                                        <i className="fa-brands fa-tiktok"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={2}>
                        <ul className="footer-listmenu">
                            <li>
                                <Link to="/">TRANG CHỦ </Link>
                            </li>
                            <li>
                                <Link to="/about">VỀ CHÚNG TÔI </Link>
                            </li>
                            <li>
                                <Link to="/contact">LIÊN HỆ </Link>
                            </li>
                            <li>
                                <Link to="/recruitment">ĐẶT BÀN</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} lg={4}>
                        <div className="footer-listmenu">
                            <ul>
                                <li>
                                    <a href="" target="_blank">
                                        <i className="fa-solid fa-location-dot"></i> UIT School
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-solid fa-phone"></i>22521577
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-timmig">
                                <h5>Mở cửa</h5>
                                <p>
                                    Thứ 2 - CN:<span>8am - 22pm</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer-instar">
                            <div className="footer-image">
                                <div className="footer-image_instar">
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/sb-instagram-feed-images/160592051_437679624012421_2157246266541466556_nthumb.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/sb-instagram-feed-images/160790142_520098882312680_7190864355709334403_nthumb.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/sb-instagram-feed-images/161271827_191172625791711_1225591762254058110_nthumb.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/sb-instagram-feed-images/160300357_262853852155134_4639421379710860544_nthumb.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/sb-instagram-feed-images/160824220_272293631058951_25353289917148256_nthumb.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/sb-instagram-feed-images/161432828_1556196047918593_925226802758570664_nthumb.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="footer-bot">
                <h5>
                    <span>Nhóm 7B </span> xin cám ơn!!
                </h5>
            </div>
            <button className={`footer-scrolltop ${scroll && "active"}`} onClick={handleOnTop}>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    );
};

export default Footer;
