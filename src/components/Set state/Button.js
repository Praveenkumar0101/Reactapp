import { Component } from "react";



class ButtonComponent extends Component{
    state={
        subscribedText1:"subscribe",
        isSubscribed:false,
        subscribeText2:"thanks for subscribing"

    }
    handleSubscribe = ()=>{
        this.setState(
            {
                isSubscribed:!this.state.isSubscribed
            },()=>{
                console.log(this.state.isSubscribed)
            }
        )
        }
    

    
        render(){
            return(
                <>
          <button onClick={this.handleSubscribe}>{this.state.isSubscribed?this.state.subscribeText2:this.state.subscribedText1}</button>
          </>
            )
            }
}
        
        export default ButtonComponent