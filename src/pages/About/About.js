import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const About = () => {
    return (
        <div className="about">
            <Container>
                <div className="about-story">
                    <Row>
                        <Col xs={5}>
                            <div className="about-story_text">
                                <h2>
                                    <span> CÂU CHUYỆN CỦA</span> NHÀ SÁNG LẬP TRẺ 
                                </h2>

                                <p>
                                    Chúng tôi là những người đam mê Pizza, được truyền cảm hứng từ câu chuyện về nhóm của tôi trường UIT ,chúng tôi kết hợp thảo mộc cổ truyền và trà sữa hiện đại để mang đến những
                                    hương vị độc đáo và bổ dưỡng.
                                </p>
                            </div>
                        </Col>
                        <Col xs={7}>
                            <div className="about-img">
                                <img src="https://i.pinimg.com/736x/7c/92/7b/7c927b0f5528e457fe2dd9033521a825.jpg" alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
     </div>
               
    );
};

export default About;
