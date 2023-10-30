import React, { useEffect } from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";


const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="about-section-container">
    <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
      <p className="primary-subheading">Nosotos</p>
      <h1 className="primary-heading">  
      Bienvenido a FOODIE, un lugar donde la pasión por la comida se fusiona con la excelencia en el servicio para brindarte una experiencia culinaria única.
      </h1>
      <p className="primary-text">
        Detrás de cada comida excepcional, hay un equipo excepcional. En FOODIE, contamos con un equipo dedicado de chefs, camareros y personal de servicio que comparten una pasión por la comida y el servicio impecable. Estamos aquí para garantizar que tu visita sea inolvidable.
      </p>
      <div className="about-buttons-container">
        <button className="secondary-button">Leer más</button>
      </div>
    </div>
  </div>
  )
}

export default Nosotros