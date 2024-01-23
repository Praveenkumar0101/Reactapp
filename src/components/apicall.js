




function Apicall(){

    const fetchData = ()=>{

        try{
            fetch("https://fakestoreapi.com/products")
            .then(Response=>Response.json())
            .then(Response=>console.log(Response))
            .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
            alert("something went wrong")
        }finally{
            console.log("stop the loaders")
        }
        return(
            <>
            <h2>hello</h2>
            <button onClick={fetchData}>
                click here
            </button>
            </>
        )
    }
}

export default Apicall