import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("grey")
  
  return (
    <>
         <div className='outerdiv' style={{backgroundColor : color}}>

          <div>
            <button className='red-button' onClick={() => (setColor("red"))} >Red</button>
             <button className='green-button'  onClick={() => (setColor("green"))}>Red</button>
              <button className='blue-button'>Red</button>
               <button className='white-button'>Red</button>
                <button className='black-button'>Red</button>
                 <button className='olive-button'>Red</button>
                  <button className='brown-button'>Red</button>
                   <button className='blue-button'>Red</button>
                    <button className='pink-button'>Red</button>
          </div>

         </div>
    </>
  )
}

export default App
