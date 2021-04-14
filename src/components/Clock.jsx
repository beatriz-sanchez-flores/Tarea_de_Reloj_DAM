import React from 'react'
import { useState, useEffect } from 'react';
function Reloj(props) {
   const timer = useNewTimer(new Date());
   return (
      <div>
        <h1>Que Rollo con el pollo</h1>
        <h2>Son las : {timer.toLocaleTimeString()} de la noche.</h2>
      </div>
    );
}
export default Reloj;
function useNewTimer(currentDate) {
    const [date, setDate] = React.useState(currentDate);
    React.useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);// pone el intervalo que llegue a 1000
        };
     });
    function tick() {
      setDate(new Date());
     }
    return date;
  }
  //