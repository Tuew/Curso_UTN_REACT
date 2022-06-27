import React from 'react'
import '../styles/components/pages/Contact.css';

const Contact = () => {
  return (
    <div id="contacto" className="contacto">
        <div>
           
            <form action="" className="formulario">

                <h2>Contactanos</h2>

                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>

                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>

                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="" id="" cols="50" rows="10"></textarea>
                </p>

                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>

        <div className="datos">
            <h1>Otros Medios</h1>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Telefono: <span>45678905</span></li>
                <li>Email: <span>contacto@gmail.com</span></li>
                <li>Facebook: <span>CoffeeTime</span></li>
                <li>Twitter: <span>@CoffeeTime</span></li>
                <li>Instagram: <span>Coffee_Time</span></li>
            </ul>
        </div>

    </div>
  )
}

export default Contact