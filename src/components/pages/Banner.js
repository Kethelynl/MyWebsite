import { Container, Row, Col } from "react-bootstrap";
import DownloadButton from "./DownloadButton";
import { useState, useEffect, useCallback } from "react";
import banner from "../../assets/img/banner2.png"

export const Banner = ({texts, language, translations}) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 200;

    // Mover o array toRotate para dentro do useCallback
    const tick = useCallback(() => {
        const toRotate = ["front-end", "back-end", "web"]; // Agora está dentro do useCallback
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }, [loopNum, isDeleting, text, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [tick, delta]);

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            {texts.welcome}
                        </span>
                        <h1>
                            {texts.developer} <span className="wrap">{text}<span className="outline">|</span></span>
                        </h1>
                        <p>{texts.content}</p>
                        <DownloadButton texts={translations[language].DownloadButton} />
                    </Col>
                    <Col xs={12} md={6} xl={5} className="img-banner">
                        <img src={banner} alt="banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}