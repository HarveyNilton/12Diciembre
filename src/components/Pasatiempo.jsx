const Pasatiempo = ()=>{

  const mesajeAlert =()=>{
    alert('Mi Pasatiempo')
  }
    return(
        <div className='container-car pasatiempo' onClick={()=>mesajeAlert()}>
         <h2 className='name'>Mi Pasatiempo</h2>
          <ul>
            <li className='item' >Practicar el Saxofon</li>
            <li className='item'>Salir con los amigos</li>
            <li className='item'>Platicar con los colegas</li>
          </ul> 
        
        </div>
    )
}

export default Pasatiempo;