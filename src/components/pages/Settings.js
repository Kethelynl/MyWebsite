
export const Settings = ({texts}) =>{
    return(
        <div className="skills" id="habilid">
        <div className="skills-icon">
            <div className="text">
                <h3>{texts}</h3>
                <div className="img-icon-habiliti">
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/python.png" alt="Descrição da imagem"/>
                        <p>PYTHON</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                            <img src="/assets/img/javascript.png" alt="Descrição da imagem"/>
                            <p>JAVASCRIPT</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/django.png" alt="Descrição da imagem"/>
                        <p>DJANGO</p>
                        </span>
                    </div>
                    <div className="img-container react">
                        <span>
                        <img src="/assets/img/atom.png" alt="Descrição da imagem"/>
                        <p>REACT</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/html.png" alt="Descrição da imagem"/>
                        <p>HTML</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/css.png" alt="Descrição da imagem"/>
                        <p>CSS</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/git.png" alt="Descrição da imagem"/>
                        <p>GIT</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
