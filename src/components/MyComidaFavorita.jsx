

const MyComidaFavorita = ()=>{
  

  const mesajeAlert =()=>{
    alert('Mi comida favorita')
  }
 

    return(
        <div className='container-car comida' onClick={()=>mesajeAlert()}>
          <div className="name-container">
            <h2 className='name'>Mi comida favorita</h2>
          </div>
         
          <ul>
            <li className='item'>Ceviche</li>
            <li className='item'>Arroz con pollo</li>
            <li className='item'>Tallarines</li>
          </ul> 
      
        </div>
    )
}

export default MyComidaFavorita;