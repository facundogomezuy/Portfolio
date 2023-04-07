import React from 'react'
import './contact.css'
const Contact =()=>{
    return(
        <footer className='' id='contact'>
            <form className='contact-container'>
                <h2 className='contact_title'>Contacto</h2>
                <div className='inputs_container'>
                    <input type="text" placeholder='Ingrese su nombre'/>
                    <input type="email" placeholder='Ingrese su Email'/>
                </div>
                <div className='text_container'>
                    <textarea placeholder='Ingrese su mensaje'/>
                </div>
                <button className='send_button'>Enviar</button>
            </form>
        </footer>
    )
}

export default Contact