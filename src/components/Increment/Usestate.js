import { useState } from "react"


const UseStateExample =()=>{

    // counter : 
    // display the initial value 
    // update the value by clicking the button

    const initialValue=5

const[count,setCount]=useState(initialValue)
const [timer,setTimer]=useState(initialValue)

const handleIncrement =()=>{
    setCount(count+1)

}


const handleTimer=()=>{


    setInterval(()=>{

 
     

        if(timer===0){
            alert("time up")
        }else{
            setTimer(timer=>timer-1)

        }

    },1000)

    // timing events :
    // setInterval runs evry interval of times 
    // setTimeout runs once after given time

}



    return(
        <>
        <h2>useState example  {count}</h2>
        <h2  style={{color:timer>50?"black":"red"}} > timer -- {timer}</h2>
        <button onClick={handleIncrement} >Click to increment</button>
        <button onClick={handleTimer} >Click to start exam</button>
        </>
    )
}

export default UseStateExample
