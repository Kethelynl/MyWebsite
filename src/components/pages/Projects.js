import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Projects = ({texts}) =>{

    console.log(texts)
    const projects =  [ 
        {
            title:"VacinaFácil",
            description: texts.subscrib1 ,
            imgUrl: "/assets/img/vacinacao.jpg",
            git:"https://github.com/Kethelynl/VacinaF-cil",
            site:"https://comercial.pythonanywhere.com/",

        },
        {
            title:"Blobly",
            description: texts.subscrib2,
            imgUrl: "/assets/img/blog.jpg",
            git:"https://github.com/Kethelynl/Blobly?tab=readme-ov-file",
            site:"https://kethelyn.pythonanywhere.com/",

        },
        {
            title:"API_Banco",
            description: texts.subscrib3,
            imgUrl: "/assets/img/banco.jpg",
            git:"https://github.com/Kethelynl/banco-feito-em-python-2.0",

        },
        {
            title:"API_Biblioteca",
            description: texts.subscrib4,
            imgUrl: "/assets/img/biblioteca.jpg",
            git:"https://github.com/Kethelynl/API_Biblioteca",

        },
         {
            title:"Lava Rápido",
            description: texts.subscrib5,
            imgUrl: "/assets/img/lavarapido.jpg",
            git:"https://github.com/Kethelynl/Sistema-de-Cadastro-e-Listagem-de-Carros-com-Django-e-GraphQL",
        },
        {
            title:"Doa Fácil",
            description: texts.subscrib6,
            imgUrl: "/assets/img/doafacil.png",
            git:"https://github.com/Kethelynl/DoaF-cil",
            site:"https://doafacil.pythonanywhere.com/",
        },
    ];

    const frontend = [
        {
            title: "Banner",
            description: "landing page animada para banners de sites interativos",
            imgUrl: "/assets/img/project_front.png",
            git:"https://github.com/Kethelynl/Banner",
            site:"https://lagepage-kethelyn.netlify.app/",
        }
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>{texts.project}</h2>
                    <p>{texts.subscrib}</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 " id="pills-tab">
                        <Nav.Item className="bloco-item">
                            <Nav.Link eventKey="first">
                                Back-end
                            </Nav.Link>
                            <Nav.Link eventKey="second">
                                Front-end
                            </Nav.Link>
                            <Nav.Link eventKey="third">
                                {texts.everyone}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        {
                                    frontend.map((frontends, index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...frontends}
                                            />
                                        )
                                    })
                                }
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                                {
                                    projects.map((project, index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                                {
                                    frontend.map((frontends, index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...frontends}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
