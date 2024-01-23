// import { Component } from "react";
// import {Circles} from 'react-loader-spinner'





// class Spinners extends Component{

//     render(){
//         return(
//             <Circles
//             height="400"
//             width="400"
//             redius="9"
//             color="green"
//             // ariaLabel="threepdots-loading"
//             // wrapperStyle
//             // wrapperClass
//             />
//         )
//     }
// }

// export default Spinners
 

// import { Component } from "react";
// import Spinners from "./Spinners";
// import Cards from "../Boostrap/Cards";
// import { Spinner } from "react-bootstrap";










// class Mounting extends Component{

// constructor(){

//     super()
//     this.state={
//         // message: "good afternoon",
//         posts:[]
//     }
// }
// componentDidMount(){
 

// fetch("https://fakestoreapi.com/products")

// .then(Response=>Response.json())
// .then(Response=>{

//     this.setState(
//         {
//             posts:Response
//         })
// })

// }
//     render(){
//         return(

// <>
// {/* 
// <h2>Mounting {this.state.message}</h2> */}
// {
//     this.state.posts.length>0 
    
//     ?
//     <> 
    
//     {

//     this.state.posts.map((eachPost)=>(
 
// <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
//  <Cards  name={eachPost.title} image={eachPost.image} descrption={eachPost.description}/>
// </div>

        


//     ))
    
// }
//     </>
//     :
//     <Spinners></Spinners>
     
   
// }

// </>


//         )
//     }

// }
// export default Mounting


import { Component } from "react";





class Update extends Component{
    constructor(){
        super()
        this.state={
            counter:1,
            color:"red",
            singlepost:{}
        }
    }
    handleClick=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    static getDerivedStateFromProps(props){
        return{color:props.favcolor}

    }
    shouldComponentUpdate(){
        return true
    }
    componentDidUpdate(){
        document.title=`count${this.state.counter}`

        fetch(`https://fakestoreapi.com/carts/${this.state.counter}`)
        .then(response=>response.json())
        .then(response=>{
        // console.log(response);
        this.setState({
            singlepost:response
        })

        })
    }

    getSnapshotBeforeUpdate(props,state){
        console.log(state);
        return null
    }
    render(){
        return(
            <>
            <h1>update phase</h1>
            <h2 style={{color:this.state.color}}>{this.state.counter}</h2>
            <button onClick={this.handleClick}>increment</button>
            {
               <h2>{this.state.singlepost?.title}</h2> 
            }
            </>
        )
    }
}
export default Update

// whenever a state or props changes Component will get re-excuted or re-render to show the updated data




