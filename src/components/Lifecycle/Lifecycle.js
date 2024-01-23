
import { Component } from "react"


class Mounting extends Component{
    constructor(){
        super()
        this.state={
            message:"good evening",
         color:"purple"
        }
    }

static getDrivestateFromprops(props){
    return {color:props.color}
}
render(){
    return(
        <>
        <h3 style={{color:this.state.color}}>{this.state.message}</h3>
        </>
    )
    
}
}

export default Mounting




