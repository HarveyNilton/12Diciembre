const MyHobbie = ()=>{
  const mesajeAlert =()=>{
    alert('Mis Hobbies')
  }
 
    return(
        <div className='container-car hobby' onClick={()=>mesajeAlert()}>
         <h2 className='name'>Mis Hobbies</h2>
          <ul>
            <li className='item' >Tocar el Saxofon</li>
            <li className='item'>Leer</li>
            <li className='item'>Jugar Futbol</li>
          </ul> 
         
        </div>
    )
}

export default MyHobbie;