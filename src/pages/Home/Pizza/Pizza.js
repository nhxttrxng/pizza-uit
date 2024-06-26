import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import HeadLine from "../../../component/Headline/Headline";
import { useNavigate } from "react-router-dom";

const Pizza = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch foods from API
    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch("https://6676e804145714a1bd732604.mockapi.io/pizza");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setFoods(data);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    // React Slick settings for the slider
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    ///add to cart
    const handleAddCart = (foodId) => {
        navigate(`/orderProduct/${foodId}`);
    };
    // Get unique food types
    const uniqueTypes = [...new Set(foods.map((food) => food.type))];

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <Container>
            <div className="pizza-container">
                {uniqueTypes.map((type) => (
                    <div className="pizza-parent" key={type}>
                        <HeadLine headline={type} />
                        <Slider {...settings}>
                            {foods
                                .filter((food) => food.type === type)
                                .map((food, index) => (
                                    <div className="pizza-box" key={food.id}>
                                        <div className="pizza-box_image">
                                            <img src={food.image} alt={food.name} />
                                            {food.percentSale !== "0" && <p>{food.percentSale}%</p>}
                                        </div>
                                        <div className="pizza-box_title">
                                            <h2>{food.nameFood}</h2>
                                        </div>
                                        <div className="pizza-box_price">
                                            <h3>{formatCurrency(food.price)}</h3>
                                        </div>
                                        <div onClick={() => handleAddCart(food.id)}>
                                            <button className="pizza-box_button-1">Đặt hàng</button>
                                        </div>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Pizza;
