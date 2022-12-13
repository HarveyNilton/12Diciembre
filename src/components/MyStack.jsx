const MyStack = ()=>{

  const mesajeAlert =()=>{
    alert('Mi Stack')
  }
 
    return(
        <div className='container-car stack' onClick={()=>mesajeAlert()}>
         <h2 className='name'>Mi Stack</h2>
          <ul>
            <li className='item' >HTML</li>
            <li className='item'>CSS</li>
            <li className='item'>JavaScript</li>
          </ul> 
          
        </div>
    )
}

export default MyStack;