const SobreMy = ()=>{

  const mesajeAlert =()=>{
    alert('Sobre Mi')
  }
    return(
        <div className='container-car' onClick={()=>mesajeAlert()}>
         <h2 className='name'>Sobre Mi</h2>
          <ul>
            <li className='item' >Harvey Nilton Lopez Quiñones</li>
            <li className='item'>Pelicula: Batman</li>
            <li className='item'>Musica: Balada - Rock</li>
          </ul> 
          
        </div>
    )
}

export default SobreMy;