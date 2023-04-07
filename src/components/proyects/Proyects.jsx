import React from 'react'
import './proyects.css'
import video1 from './ecommerce.mp4'
import video2 from './weatherapp.mp4'
const Proyects = () =>{
    return(
        <section className='proyects-box' id='proyects'>
           <h2 className='proyects-title'>Proyectos</h2>
            <div className='proyects-container'>
                <div className='container'>
                    <video className='video' src={video1} autoPlay loop muted />
                    <h4>E-Commerce</h4>
                    <a href='https://facundogomezuy.github.io/workspace-inicial/'>Ir a la pagina</a>
                </div>
                <div className='container'>
                    <video className='video' src={video2} autoPlay loop muted />
                    <h4>Weather App</h4>
                    <a href='https://facundogomezuy.github.io/WeatherApp/'>Ir a la pagina</a>
                </div>
            </div>
        </section>
    )
}

export default Proyects