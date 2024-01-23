import { hover } from "@testing-library/user-event/dist/hover"









const InlineStyles =()=>{
    return(
        <h4 style={
            {
                color:"red",
                textAlign:"center",
                justifyContent:"center",
                fontSize:"100px",
                transition: "width 2s",
                
            }
        }>Good night</h4>
    )
}
export default InlineStyles