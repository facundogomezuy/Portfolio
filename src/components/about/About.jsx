import React from 'react'
import "./about.css"
const About=()=>{
 return (
    <section className='about-box' id='about'>
        <div className='about_info' >
            <div className='about_text'>
                <h1 className='about_title'>Facundo Gómez</h1>
                <h3>Front-End Developer</h3>
                <p>Desarrollador Web de 20 años, proactivo y organizado. Siempre motivado a aprender algo nuevo.
                Actualmente buscando una primera experiencia laboral dentro del área de la tecnología.</p>
            </div>
            <div className='about_img'>
            </div>
        </div>
        <div>
        <a href="./CV.pdf" download>
            <button id='download_CV'>Descargar CV</button>
        </a>
        </div>
    </section>
    
 )
}

export default About
