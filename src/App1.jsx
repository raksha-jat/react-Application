// import { useId } from "react";
// function App1(){
//     return(
//         <>
//         <h1>UseId Hook</h1>
//         <UserForm /><hr />
//         <UserForm />
//         </>
//     )
// }
// export default App1;

import useToggle from "./useToggle"

// function UserForm(){
//     // const name=useId();
//     // const password=useId();
//     // const terms=useId();
//     // const skills=useId();
//     const user=useId();
//     return(
//       <>
//       {/* <form action="">
//         <label htmlFor={name}>name</label>
//         <input type="text" id={name} placeholder="Enter user Name" /><br></br><br />
//         <label htmlFor={password}>Password </label>
//         <input type="text" id={password} placeholder="Enter Password " /><br /><br />
//         <label htmlFor={skills}>Enter User Skills</label>
//         <input type="text" id={skills} placeholder="Enter skills" /><br />
//     <br />
//     <input type="checkbox" id={terms} placeholder="" />
//     <label htmlFor={terms}>Terms & Conditions</label>
//       </form> */}
//            <form action="">
//         <label htmlFor={user+'name'}>name</label>
//         <input type="text" id={user+'name'} placeholder="Enter user Name" /><br></br><br />
//         <label htmlFor={user+'password'}>Password </label>
//         <input type="text" id={user+'password'} placeholder="Enter Password " /><br /><br />
//         <label htmlFor={user+'skills'}>Enter User Skills</label>
//         <input type="text" id={user+'skills'} placeholder="Enter skills" /><br />
//     <br />
//     <input type="checkbox" id={user+'terms'} placeholder="" />
//     <label htmlFor={user+'terms'}>Terms & Conditions</label>
//       </form>
//       </>
//     )
// }
// import { useState } from "react"
// import CollegeCom from "./College1"
// import { SubjectContext } from "./ContextData"
// export default function App(){
//   const [subject,setSubject]=useState('');
//   return (
//     <div style={{backgroundColor:'yellow',padding:'10px',paddingBottom:'70px'}}>
//       <SubjectContext.Provider value={subject}>
//         <select defaultValue={subject} onChange={(event)=>setSubject(event.target.value)}>
//           <option value=''>Select Subject</option>
//           <option value="maths">Maths</option>
//           <option value="science">Science</option>
//           <option value="english">English</option>
//           <option value="hindi">Hindi</option>
//         </select>

//        <h1>Context Api</h1>
//        <button onClick={()=>setSubject('')}>clear Subject</button>
//        <CollegeCom />
//       </SubjectContext.Provider>
    
//     </div>
//   )
// }
import useToggler from "./useToggle";
export default function App1(){
  const [value,toggleValue]=useToggler(false);
  const [data,setData]=useToggler(true);
  // console.log('val---',value)
  return(
  <div>
    <button onClick={toggleValue} style={{margin:'15px', backgroundColor:'red',color:'white'}}>Toggle Heading</button>
    <button onClick={()=>toggleValue(false)} style={{margin:'15px', backgroundColor:'red',color:'white'}}>Hide Heading</button>
    <button onClick={()=>toggleValue(true)} style={{margin:'15px', backgroundColor:'red',color:'white'}}>Show Heading</button>
 {
  value ? <h2>Custom Hooks in React js</h2>:null
 } 
 <hr />
 <button onClick={setData} style={{margin:'15px', backgroundColor:'red',color:'white'}}>Toggle Heading</button>
    <button onClick={()=>
      setData(false)} style={{margin:'15px', backgroundColor:'red',color:'white'}}>Hide Heading</button>
    <button onClick={()=>
      setData(true)} style={{margin:'15px', backgroundColor:'red',color:'white'}}>Show Heading</button>
 
 {
  data ? <h1>Second Heading</h1> :null
 }
  </div>
  )
}