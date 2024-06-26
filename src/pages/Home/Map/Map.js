import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
    return (
        <div className="map">
            <Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2256885375105!2d106.7995631751516!3d10.8704316574525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e7e8abb0eb%3A0xec43e4b99472c18a!2zVUlUIC0gQ-G7lW5nIEE!5e0!3m2!1svi!2s!4v1719069211283!5m2!1svi!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Container>
        </div>
    );
};

export default Map;
