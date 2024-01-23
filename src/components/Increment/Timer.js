// import { useState } from "react"



// const Seconds =()=>{
//  const initialValue=10

// //  const[count,setCount]=useState(initialValue)
//  const [timer,setTimer]=useState(initialValue)

// //  const handleIncrement =()=>{
// //     setCount(count+1)

// // }

// const handleTimer=()=>{


//     setInterval(()=>{

 
     

//         // if(timer===0){
//         //     alert("timeUp")
//         // }else{
//             setTimer(timer=>timer-1)

//         // }
    

//     },1000)
// }


// return(
//     <>
//     <h3>timer--{timer}</h3>
//     <button onClick={handleTimer}>Click to start</button>
//     </>
// )
// }


// export default Seconds

//timer stopping at 0
import { useState, useEffect } from "react";

const Seconds = () => {
  const initialValue = 10;
  const [timer, setTimer] = useState(initialValue);
  let intervalId;

  const handleTimer = () => {
    intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          alert("Time's up!");
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h3 style={{marginLeft:"30%", fontSize:"50px"}}>Timer: {timer} </h3>
      <button onClick={handleTimer} style={{color:"red", fontFamily:"fantasy", marginLeft:"30%", padding:"50px"}}>Click to start</button>
    </>
  );
};

export default Seconds;
