
export const Settings = ({texts}) =>{
    return(
        <div className="skills" id="habilid">
        <div className="skills-icon">
            <div className="text">
                <h3>{texts}</h3>
                <div className="img-icon-habiliti">
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/python.png"/>
                        <p>PYTHON</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                            <img src="/assets/img/javascript.png"/>
                            <p>JAVASCRIPT</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/django.png"/>
                        <p>DJANGO</p>
                        </span>
                    </div>
                    <div className="img-container react">
                        <span>
                        <img src="/assets/img/atom.png"/>
                        <p>REACT</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/html.png"/>
                        <p>HTML</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/css.png"/>
                        <p>CSS</p>
                        </span>
                    </div>
                    <div className="img-container">
                        <span>
                        <img src="/assets/img/git.png"/>
                        <p>GIT</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}