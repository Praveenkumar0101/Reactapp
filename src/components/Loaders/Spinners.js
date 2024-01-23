


import { Component } from "react";
import {Circles} from 'react-loader-spinner'





class Spinners extends Component{

    render(){
        return(
            <Circles
            height="400"
            width="400"
            redius="9"
            color="green"
            // ariaLabel="threepdots-loading"
            // wrapperStyle
            // wrapperClass
            />
        )
    }
}

export default Spinners