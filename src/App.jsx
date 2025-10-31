// import MyApp from './Headers'
// function App(){
//      return (
//       <div>
//         <MyApp />
//       <h1>hello</h1>
//       <h1>hello from react</h1></div>
//      )
     
     
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
import { useState } from "react"
//  import { ClickFunction,Fruit } from "./click&function";
function App(){
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

     return(
      <div>
      <button onClick={handleFruit}>change Fruit</button>
      </div>
     )
  }



export default App