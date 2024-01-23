import { Component } from "react";
import { FidgetSpinner} from 'react-loader-spinner';






class Fidget extends Component{
    render(){
        return(
            <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLable="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="Fidget-spinner-wrapper"
            />

        )
    }
}
export default Fidget