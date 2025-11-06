// function Student({name}){
//     return(
//         <div>
//             <hr />
//             <h1>Student name is : {name}</h1>
//               <hr />
//         </div>
//     )
// }
// export default Student;

const Student= ({student}) => {
return(
    <div>
          <h3>Students</h3>
                                {
                                  student.map((student,index1)=>{
                                      return <ul key={index1} style={{borderBottom:"2px solid black"}}>
                                       <li><h4>Name:{student.name}</h4></li> 
                                       <li><h4>Age{student.age}</h4></li> 
                                       <li><h4>Email:{student.email}</h4></li> 
                                       </ul>
                                    })
                                }
     </div>
)

}
export default Student;