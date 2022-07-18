import {useState} from 'react'
import './App.css'
//useState takes the initial state 

function App() {
  //this syntax is JSX = JavaScript XML, js code but written in XML. Markup language 
  //write it how its meant to appear on the screen 
  //returns a state variable and a function to update it 
  //const [count, setCount] = useState(0)
  //left, variable state itsself, on right is the function that updates the variable on the left 


  return (
    <div className='screen' >
      <video autoPlay muted loop id="myVideo">
        <source src="https://a2development.s3.amazonaws.com/H264HD1080.mov" type="video/mp4
        "/>
      </video>
      <div className="" id="fs-overlay">
      <img id="header-img" src="https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png" />
      </div>
    </div>
  );
}

export default App;

{/* <h1>Hello React</h1>
      <h2>count is {count}</h2>
      <button onClick={() => { setCount(count +1) } }>CLICK ME</button> */}
