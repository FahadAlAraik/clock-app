import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import $ from 'jquery';

setInterval(()=> {
  $("#fadeHeader").fadeToggle()
},500)



function App() {
  
  const initialTime = new Date()
  
  const [date,updateDate] = useState(initialTime.toLocaleTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => {
      const dat = new Date()
      updateDate(dat.toLocaleTimeString())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <h1 id = "fadeHeader" style = {{fontSize:"55px",width:"21%", margin:"17.5% auto auto auto ", fontFamily:"Poppins"}}> {date}</h1>
    </div>

  )
  


}


const ClockDiv = ReactDOM.createRoot(document.getElementById('Clock'));
ClockDiv.render(

    <App />
)




