// function College({names}){
//     return(
//         <div>
//             <h1>College name is : {names[3]}</h1>
//         </div>
//     )
// }
// export default College;

import Student from "./Students";

function College1({college}){
    console.log(college);
    return(
   <div style={{backgroundColor:"#ccc", padding:"20px", borderBottom:"2px solid #000", margin:"20px"}}>
                        <h2 style={{textAlign:"center"}}>name: {college.name}</h2>
                        <ul>
                            <li><h2>city: {college.city}</h2></li>
                            <li><h2>website: {college.website}</h2></li>
                            <li>
                                <Student student={college.student}/>
                            </li>
                        </ul>
                   </div>     
                        
                        

    )
}
export default College1;