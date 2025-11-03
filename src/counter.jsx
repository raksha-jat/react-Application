// import { useState } from "react";
// import User from "./user";
// const Counter=()=>{
//     const [count,setCount]=useState(0);
//     const [rcount,reverse]=useState(10);
//     // const [display,setDisplay]=useState(2);
//     const reverseCount=()=>{
//         reverse(rcount-1);
//     }

//     const updateCount=()=>{
//         setCount(count+1);
//     }
//     return(
//         <div>
//             {/* <h1>Counter: {count}</h1>
//             <button onClick={updateCount}>Update Counter</button>
//             <h1>reverse count: {rcount}</h1>
//              <button onClick={reverseCount}>Reverse Counter</button> */}
//              {/* {
//                 display? <h1>Raksha Jat</h1>:<h1>NO User Found</h1>
//              } */}
//               {/* {
//                 display? <User />:<h1>NO User Found</h1>
//              } */}
            
//              {/* <button onClick={()=>setDisplay(!display)}>change name</button> */}


//              {/* adding MULTIPLE CONDITIONS */}
//              <h1>Counter</h1>
//             <button onClick={updateCount}>Update Counter </button>
//             {
//             count==0? <h1>Condition 0</h1>
//              :count==1? <h1>Condition 1</h1>
//               :count==2? <h1>Condition 2</h1>
//                :count==3? <h1>Condition 3</h1> 
//                :count==4? <h1>Condition 4</h1>
//                 :count==5? <h1>Condition 5</h1>
//                  :<h1>Counter not found</h1>
//                 }
            
//         </div>
//     )
// }
// export default Counter;