import React from "react";
import './knowledge.css'
const Knowledge = () =>{
    return (
        <section className='knowledge-box' id="knowledge">
            <h2 className='proyects-title'>Conocimientos</h2>
            <div className="knowledge-separate-box">
                <div className="study-box">
                    <h3 className="study-title">Formación</h3>
                    <p>Mi primer acercamiento con el Desarrollo Web fue hace 4 años creando mi primera página web, muy básica, con solo HTML y muy poco CSS, luego de eso deje un poco de lado esto que para mí solo era un hobby. Mas tarde, casi 3 años después, vi la oportunidad de ingresar a <b>Jóvenes a Programar</b> para poder formarme en este mundo y aquí estamos hoy en día, con 1 año de arduo aprendizaje en esta área.
                    Además de estudiar Desarrollo web, estoy actualmente cruzando <b>Ingeniería Eléctrica</b> en la Fing</p>
                </div>
                <div className="skills-box">
                    <h3>Skills</h3>

                    
                    <div className="skill-box">
                        <p className="skill-name">HTML</p>
                        <div className="progress">
                            <div className="progress-bar" Style="width:85%;"></div>
                        </div>
                    </div>
                    <div className="skill-box">
                        <p className="skill-name">CSS</p>
                        <div className="progress">
                            <div className="progress-bar" Style="width:75%;"></div>
                        </div>
                    </div>
                    <div className="skill-box">
                        <p className="skill-name">JavaScript</p>
                        <div className="progress">
                            <div className="progress-bar" Style="width:70%;"></div>
                        </div>
                    </div>
                    <div className="skill-box">
                        <p className="skill-name">ReactJS</p>
                        <div className="progress">
                            <div className="progress-bar" Style="width:50%;"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Knowledge