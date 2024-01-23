import { Children } from "react";





export function Chill ({children,width,backgroundColor}){
    return(

    <button style={{width:width,backgroundcolor:backgroundColor}}>{children} </button> 
    )
}