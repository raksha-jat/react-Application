// import MyApp from './Headers'
// function App(){
//      return (
//       <div>
//         <MyApp />
//       <h1>hello</h1>
//       <h1>hello from react</h1></div>
//      )

import { useState } from "react";

     
     
// }
// export default App;
// import Login,{SignUp,Profile,UserKey} from './UserComponent';
// import Button from './HtmlJsAdd';
// function App(){
//   console.log(sum());
//   return(
//     <div>
//     <h1>FIRST Component :  {sum()}</h1>
//     <Fruit></Fruit>
//     <h1>{UserKey}</h1>
//     <Colors />
//     <Login />
//     <SignUp />
//     <Profile />
//     <Button />
//         </div>
//   )
// }

// function Fruit(){
//   return(
//     <h1>Apple</h1>
//   )
// }
// function Colors(){
//   return(
//    <ul>
//     <li>Blue</li>
//     <li>Red</li>
//    </ul>
//   )
// }
// function sum(){
//   return "testing js in react"
// }
// export default App;

// WITHOUT JSX FILE 
// import { createElement } from "react";
// import { AnilSidhu } from "./HtmlJsAdd";
// function App(){
//   //  return createElement("div",{id:"rootDiv"},"hello div"),
//   //  return createElement("div",{id:"rootDiv1"}),createElement("h1",{id:"heading"},"heading Teg")
//   return(
//     // <div className="rootOther">Hello world</div>
//        <AnilSidhu />
//   )
// }


// this gives error
// const Fruit=(name)=>{
//     alert(name);
// }
// import { useState } from "react"
// import Counter from "./counter";

//  import { ClickFunction,Fruit } from "./click&function";
// function App(){
  // const name="Raksha Jat";
  // const userObj={
  //   name:"raksha jat",
  //   email:"rakshajat005@gmail.com",
  //   password:"akkii"
  // }
  // let cities=["indore","Dewas","jabalpur","jaipur"];
  // let x=20;
  // let y=30;
  // function fruit(){
  //   return 'Apple'
  // }
  // function Opration(a,b,op){
  //   if(op=='+'){
  //     return a+b;
  //   }
  //   else if(op=='-'){
  //     return a-b;
  //   }
  //   else{
  //     return a*b;
  //   }
  // }
  // function sum(d,e){
  //   return d+e;
  // }
  
  //   const path1="/home-hero-bg.jpg";

  //   return(
  //     <div>
  //  <h1>{name?name:"user not found"}</h1> 
  //  <h1>{x+y}</h1> 
  //  <h1>{fruit()}</h1>
  //  <h1>{sum(1,3)}</h1>
  //  <h1>{Opration(2,3,'+')}</h1>
  //  <h4>{userObj.email}</h4>
  //   <h4>{cities[2]}</h4>
  //   <img src={path1}  />
  //   <input type="text" value={name} />
  //  </div>
  //   )


  // click event and function call
// const Fruit=(name)=>{
//     alert(name);
// }
//     return(
//       <div>
//         <button onClick={ClickFunction}>click me!</button>
//          <button onClick={()=>Fruit("clicked on banana")}>banana</button>
//           <button onClick={()=>Fruit("clicked on apple")}>apple</button>
//       </div>
//     )


// without state in react
    //  let fruit="banana";
    //  const handleFruit=()=>{
    //   fruit="apple";
    //   console.log(fruit)
    //  }
    //  return(
    //   <div>
    //   <h2>{fruit}</h2>
    //   <button onClick={handleFruit}>change Fruit</button>
    //   </div>
    //  )
      

    //with state in react
  //   const [fruit,setFruit]=useState("Apple");
  //   const handleFruit=()=>{
  //     setFruit("Banana");
  //   }
  //    return(
  //     <div>
  //       <h2>{fruit}</h2>
  //     <button onClick={handleFruit}>change Fruit</button>
  //     <Counter />
  //     </div>
  //    )
  // }

// import User from "./Props1";
// 

import Skills,{RadioButon} from "./Skills";

function App(){
  // const [val,setValue]=useState("");
  //   const [val1,setValue1]=useState("");
  //  const [val2,setValue2]=useState("");
  // return(
  //   <div>
  //     <h1>Get Input Field value</h1>
  //     <form action="" method="get">
  //     <input type="text" value={val} onChange={(event)=>setValue(event.target.value)} placeholder='Enter User Name' /><br /><br />
      
     
  //     <input type="password"  value={val1} onChange={(event)=>setValue1(event.target.value)} placeholder="enter password"  /><br /><br />
  //     {/* <button onClick={()=>setValue1("")}>clear password</button><br /> */}
  //     <input type="email"  value={val2} onChange={(event)=>setValue2(event.target.value)} placeholder="enter email"  /><br /><br />
  //     {/* <button onClick={()=>setValue2("")}>clear Email</button><br /> */}
  //     <br /><br />
  //     <button>Submit</button>
  //      <button onClick={()=>{setValue('');setValue1('');setValue2('')}} >Clear Value</button><br />
  //     <br /><br />
  //     <h3>{val}</h3>
  //     <h3>{val1}</h3>
  //    <h3>{val2}</h3>

  //     </form>
  //   </div>
  // )

  // CHECKBOXES
  return(
    <div>
      <h2>Handle Checkbox in React JS</h2>
 <Skills />
   <h2>HANDLE RADIO AND DROPDOWN</h2>
 <RadioButon />
    </div>
  )
 
}

export default App;

