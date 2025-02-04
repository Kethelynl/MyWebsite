import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, git, site}) =>{
    return ( 
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx"> 
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div>
                        <div className="project-buttons">
                            <a href={git} target="_blank" rel="noopener noreferrer">
                                <button className="vvd"><span>GitHub</span></button>
                            </a>
                            {site && ( // Renderiza apenas se site existir
                                <a href={site} target="_blank" rel="noopener noreferrer">
                                    <button><span>Visitar Site</span></button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}