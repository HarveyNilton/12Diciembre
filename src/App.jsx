import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './components/User'
import Story from './components/Story'

import SobreMy from './components/SobreMy'
import MyHobbie from './components/MyHobbie'
import Pasatiempo from './components/Pasatiempo'
import MyComidaFavorita from './components/MyComidaFavorita'
import MyStack from './components/MyStack'

import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  const me ={
    name:'Harvey Nilton Lopez Quiñones',
    movie: 'Batman',
    music: 'Rock'
  }
 


 /*function btndatos(){
  alert('hello')
  me.foreach(me =>{
    const [name ,movie ,music] = me
  })
 }
*/

  

  return (
      <div className="App">
        <Header/>
        <SobreMy/>
        <MyHobbie/>
        <Pasatiempo/>
        <MyComidaFavorita/>
        <MyStack/>
        
    </div>
    
  )
}

export default App
