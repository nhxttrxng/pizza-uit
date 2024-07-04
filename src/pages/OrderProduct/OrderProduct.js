import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";

const OrderProduct = () => {
    const { foodId } = useParams();
    const [food, setFoods] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const updateCart = () => {

    }

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch(`https://6676e804145714a1bd732604.mockapi.io/pizza/${foodId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setFoods(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, [foodId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !food) {
        return <div>Xin hãy load lại trang</div>;
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className="orderProduct">
            <Container>
                <div className="orderProduct-back" onClick={() => navigate("/")}>
                    <i className="fa-solid fa-chevron-left"></i>
                    <p>Trang chủ</p>
                </div>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="orderProduct-images">
                            <img src={food.image} alt={food.name} />
                            {food.percentSale && parseInt(food.percentSale) !== 0 && <p>{food.percentSale}%</p>}
                        </div>
                    </Col>
                    <Col md={12} lg={8}>
                        <div className="orderProduct-choose">
                            <h2>{food.nameFood}</h2>
                            <div className="orderProduct-choose_description">
                                <p>{food.description}</p>
                            </div>
                            <div className="orderProduct-choose_price">
                                <p className="">{formatCurrency(food.price)}</p>
                            </div>
                            <div className="orderProduct-choose_quantity">
                                <i className="decrement" onClick={handleDecrement}>-</i>
                                <h5>{quantity}</h5>
                                <i className="increment" onClick={handleIncrement}>+</i>
                            </div>
                            <div class="orderProduct_button-1" onClick={updateCart}>
                                Mua Ngay
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderProduct;
