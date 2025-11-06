// function User({name="user"}){
//     return (
//         <div>
//             <h1>hii, {name}</h1>
//         </div>
//     )
// }
// export default User;

const User=({data})=>{
    return(
        <div style={{border:"2px solid green",padding:'10px',margin:'10px',width:'400px',borderRadius:'10px'}}>
           <h3>Name : <span style={{color:'green'}}>{data.name}</span></h3>
           <h3>age : <span style={{color:'green'}}>{data.age}</span></h3>
           <h3>email : <span style={{color:'green'}}>{data.email}</span></h3>
        </div>
    )
}
export default User;

