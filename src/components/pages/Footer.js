import { Container, Row, Col } from "react-bootstrap";
import icon2 from "../../assets/img/github.png"

export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <Row className="align-items-center">
            <Col size={12} sm={6}>
                <h2  className="logo">/KETHELYN/</h2>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/kethelyn-cavalari/"><img src="/assets/img/nav-icon1.svg" alt="Ícone 1" /></a>
                <a href="https://github.com/Kethelynl"><img  src={icon2} alt="Descrição da imagem"/></a>
                <a href="https://www.instagram.com/ket_cavalari/"><img  src="/assets/img/nav-icon3.svg" alt="Descrição da imagem"/></a>
                </div>
                <p>Copyright 2025. All Rights Reserved</p>
            </Col>
            </Row>
        </Container>
        </footer>
    )
}
