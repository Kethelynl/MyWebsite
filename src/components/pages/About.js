import { Container } from "react-bootstrap"

export const About = ({texts}) => {
    return(
        <Container className="container-about" id="About">
            <div className="info">
                <div className="resume">
                <h3>{texts.name}</h3>
                <p>{texts.about}</p>
                </div>
                <h4>{texts.habilid}</h4>
                <div className="habilid">
                    <p>{texts.p1}</p>
                    <p>{texts.p2}</p>
                    <p>{texts.p3}</p>
                    <p>{texts.p4}</p>
                </div>
            </div>
            <div className="my-image">
                <img src="assets/img/eu.jpeg" alt="I"/>
            </div>
        </Container>
    )
}