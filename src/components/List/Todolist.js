
export const Todolist=()=>{

const details={
    name:"wildlife",
    imageURL:"https://th.bing.com/th/id/R.5b63ff8deba16dbb26e1776904d533d9?rik=D6HaG2iPOhDqtQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-CzAzU2GH_S8%2fT-IHC8F5GrI%2fAAAAAAAAA38%2fO8jAb4FI5kU%2fs1600%2f12AU012XHF-31619.jpg&ehk=O3YULumqKcDxqbU%2f0LgYBxn5wdOhsielwfQXv%2f%2fU1pA%3d&risl=&pid=ImgRaw&r=0",
    imgALT:"animal",
    // listitems:["wildlife","nature","explore"]
    head:["Wildlife"],
    Heading:["animal1","anima2","animal3"],
    row1:["cat","rat","lion"],
    row2:["cat","rat","lion"],
    row3:["cat","rat","lion"],

    
}

const {name,imageURL,imgALT,head,Heading,row1,row2,row3}=details
     return(
        <div>
            <h1>{name}</h1>
            <img 
            src={imageURL}
            alt={imgALT}
            width="250px"
            />
         <table>
            <tr>
                <th></th>
                <th>{head[0]}</th>
            </tr>
            <tr>
                <th>{Heading[0]}</th>
                <th>{Heading[1]}</th>
                <th>{Heading[2]}</th>
            </tr>
             <tr>
                <td>{row1[0]}</td>
                <td>{row1[1]}</td>
                <td>{row1[2]}</td>  
           </tr>
           <tr>
                <td>{row2[0]}</td>
                <td>{row2[1]}</td>
                <td>{row2[2]}</td>  
           </tr>
           <tr>
                <td>{row3[0]}</td>
                <td>{row3[1]}</td>
                <td>{row3[2]}</td>  
           </tr>
         </table>
         <form>
            <label for="text">Email</label>
            <input type="text" id="Email"></input>
         </form>
        </div>
     )
}

// export const hello=()=>{
//     const head={
//         Head1:"coders",
//     }
//     const={Head1},
// }

