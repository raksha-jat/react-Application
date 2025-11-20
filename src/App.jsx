// import MyApp from './Headers'
// function App(){
//      return (
//       <div>
//         <MyApp />
//       <h1>hello</h1>
//       <h1>hello from react</h1></div>
//      )

import { useEffect, useRef, useState, useTransition } from "react";
// import AddUser from "./AddUsers";
// import Counter from "./counter";

     
     
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


// import Skills,{RadioButon,Looping,ReuseComponentInLoop} from "./Skills";

// import Clock from "./Clock";
// import College1 from "./College";
// function App(){
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
  // const [color,setColor]=useState('green')


  //array nested looping with component
// const collegeData=[
//         {
//             name:"IET Alwar",
//             city:"Alwar",
//             website:"www.iet.com",
//             student:[
//                 {
//                     name:"Anil sidhu",
//                     age:'29',
//                     email:'anil@test.com'
//                 },
//                  {
//                     name:"peter",
//                     age:'24',
//                     email:'peter@test.com'
//                 },
//                  {
//                     name:"john snow",
//                     age:'30',
//                     email:'john@test.com'
//                 }
//             ]
//         },
//         {
//             name:"IIT kota",
//             city:"rajisthan",
//             website:"www.iit.com",
//             student:[
//                 {
//                     name:"Anil sidhu",
//                     age:'29',
//                     email:'anil@test.com'
//                 },
//              {
//                     name:"peter",
//                     age:'24',
//                     email:'peter@test.com'
//                 },
//                  {
//                     name:"john snow",
//                     age:'30',
//                     email:'john@test.com'
//                 }
//             ]
//         },
//         {
//             name:"IT banglore",
//             city:"banglore",
//             website:"www.it.com",
//             student:[
//                 {
//                     name:"Anil sidhu",
//                     age:'29',
//                     email:'anil@test.com'
//                 },
//              {
//                     name:"peter",
//                     age:'24',
//                     email:'peter@test.com'
//                 },
//                  {
//                     name:"john snow",
//                     age:'30',
//                     email:'john@test.com'
//                 }
//             ]
//         },
//         {
//             name:"Iet Alwar",
//             city:"Alwar",
//             website:"www.iet.com",
//             student:[
//                 {
//                     name:"Anil sidhu",
//                     age:'29',
//                     email:'anil@test.com'
//                 }
//             ]
//         },


//     ]

//   return(
//     <div>
//       {/* <h2>Handle Checkbox in React JS</h2>
//  <Skills />
//    <h2>HANDLE RADIO AND DROPDOWN</h2>
//  <RadioButon /> */}
//  {/* <Looping /> */}
//  {/* <ReuseComponentInLoop /> */}

//  {/* <h1>Digital Clock in React JS </h1>
//  <select onChange={(event)=> setColor(event.target.value)} >
//   <option value="red">Red</option>
//    <option value="blue">Blue</option>
//     <option value="green">Green</option>
//      <option value="orange">Orange</option>
//  </select>
//  <Clock color={color}/> */}
//      <div>
//             <h2>Array Nested Looping with Component</h2>
//             {
//                 collegeData.map((college,index)=>{
//                    return <div key={index} ><hr />
// <College1 college={college}/>
//                                        </div>
//                 })
//             }
//         </div>

//     </div>
//   )
 
// }

// export default App;



//hooks   :   useEffect hook

// function App(){
//     const [counter,setCounter]=useState(0);
//     const [data,setData]=useState(0);
//     useEffect(()=>{
// //  callOnce();
//  counterFunction();
//     },[counter])
   
//     useEffect(()=>{
//       callOnce();
//     })
//     function counterFunction(){
//       console.log("counter function",counter)
//     }
//   function callOnce(){
//     console.log("callOnce function called");
//   }

 
//   return(
//     <div>
//       <h1>useEffect Hook</h1>
//       <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
//       <button onClick={()=>setData(data+1)}>data {data}</button>
//     </div>
//   )


//  const [counter,setCounter]=useState(0);
//  const [data,setData]=useState(0);
//  const [display, setdisplay]=useState(false);
// return(
//   <div>
//     {
//     display? <Counter counter={counter} data={data}/>:"there's no data found"
//     }
//     {/* <h1>handle Props side effect with useEffect</h1> */}
    
//      <button onClick={()=>setCounter(counter+1)}>counter</button>
//      <button onClick={()=>setData(data+1)}>data</button>
//      <button onClick={()=>setdisplay(!display)}>Toggle</button>

//   </div>
// )
// }

// export default App;


// Styling in react js

// function App(){
//   const [cardStyle,setcardStyle]=useState(
//     {border:'1px solid #ebd9d9ff',width:'190px', boxShadow:'1px 2px 3px 0px #cccccc57',margin:'10px'}
//   )

//    const [grid,setGrid]=useState(true);
//   const updateTheme=(bgColor,textColor)=>{
//    setcardStyle({...cardStyle,backgroundColor:bgColor,color:textColor});
  
//   } 
//   // const cardStyle={border:'1px solid #ebd9d9ff',width:'200px', boxShadow:'1px 2px 3px 0px #cccccc57',margin:'10px'};
//   return(
//     <>
//       <h2 style={{color: 'red',backgroundColor:'yellow'}}>inline Style in React</h2>
//       <button onClick={()=>updateTheme('gray','white')}>Gray Theme</button>
//       <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
//       <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
//       <div style={{display:grid?'flex':'block',flexWrap:'wrap'}}>
//         <div style={cardStyle}>
//         <img style={{width:'190px'}} src="public/team-03.jpg" alt="vite" />
//         <div style={{padding:'5px'}}>
//           <h4>Raksha Jat</h4>
//           <p>Mern Stack Developer</p>
//           </div>
//       </div>
//        <div style={cardStyle}>
//         <img style={{width:'200px'}} src="public/team-03.jpg" alt="vite" />
//         <div style={{padding:'5px'}}>
//           <h4>Raksha Jat</h4>
//           <p>Mern Stack Developer</p>
//           </div>
//       </div>
//        <div style={cardStyle}>
//         <img style={{width:'200px'}} src="public/team-03.jpg" alt="vite" />
//         <div style={{padding:'5px'}}>
//           <h4>Raksha Jat</h4>
//           <p>Mern Stack Developer</p>
//           </div>
//       </div>
//        <div style={cardStyle}>
//         <img style={{width:'200px'}} src="public/team-03.jpg" alt="vite" />
//         <div style={{padding:'5px'}}>
//           <h4>Raksha Jat</h4>
//           <p>Mern Stack Developer</p>
//           </div>
//       </div>
//        <div style={cardStyle}>
//         <img style={{width:'200px'}} src="public/team-03.jpg" alt="vite" />
//         <div style={{padding:'5px'}}>
//           <h4>Raksha Jat</h4>
//           <p>Mern Stack Developer</p>
//           </div>
//       </div>
//        <div style={cardStyle}>
//         <img style={{width:'200px'}} src="public/team-03.jpg" alt="vite" />
//         <div style={{padding:'5px'}}>
//           <h4>Raksha Jat</h4>
//           <p>Mern Stack Developer</p>
//           </div>
//       </div>
//        <div style={cardStyle}>
//         <img style={{width:'200px'}} src="public/team-03.jpg" alt="vite" />
//         <div style={{padding:'5px'}}>
//           <h4>Raksha Jat</h4>
//           <p>Mern Stack Developer</p>
//           </div>
//       </div>
//       </div>
     
//     </>
//   )
// }
// export default App;


// import './css/Style.css'
// function App(){

//   return(
//     <>
//     <h1 className="heading">External Style</h1>
//     <div className="card-container">
//   <div className="outer-div">
//     <div>
//       <img className="img-style" src="public/team-03.jpg" alt="user" />
//     </div>
//     <div className="text-wrap">
//       <h4>Raksha jat</h4>
//       <p>Full Stack developer</p>
//     </div>
//   </div>
//     <div className="outer-div">
//     <div>
//       <img className="img-style" src="public/team-03.jpg" alt="user" />
//     </div>
//     <div className="text-wrap">
//       <h4>Raksha jat</h4>
//       <p>Full Stack developer</p>
//     </div>
//   </div>
//     <div className="outer-div">
//     <div>
//       <img className="img-style" src="public/team-03.jpg" alt="user" />
//     </div>
//     <div className="text-wrap">
//       <h4>Raksha jat</h4>
//       <p>Full Stack developer</p>
//     </div>
//   </div>
//     <div className="outer-div">
//     <div>
//       <img className="img-style" src="public/team-03.jpg" alt="user" />
//     </div>
//     <div className="text-wrap">
//       <h4>Raksha jat</h4>
//       <p>Full Stack developer</p>
//     </div>
//   </div>
//    <div className="outer-div">
//     <div>
//       <img className="img-style" src="public/team-03.jpg" alt="user" />
//     </div>
//     <div className="text-wrap">
//       <h4>Raksha jat</h4>
//       <p>Full Stack developer</p>
//     </div>
//   </div>
//    <div className="outer-div">
//     <div>
//       <img className="img-style" src="public/team-03.jpg" alt="user" />
//     </div>
//     <div className="text-wrap">
//       <h4>Raksha jat</h4>
//       <p>Full Stack developer</p>
//     </div>
//   </div>
//    <div className="outer-div">
//     <div>
//       <img className="img-style" src="public/team-03.jpg" alt="user" />
//     </div>
//     <div className="text-wrap">
//       <h4>Raksha jat</h4>
//       <p>Full Stack developer</p>
//     </div>
//   </div>
  
//   </div>
//     </>
//   )
// }

// export default App;


// import UserProfile from "./UserProfile";
// function App(){
//   let profiles=Array.from({ length:10 })
//   return(
//     <>
//     <h1>Style with CSS module in react js</h1>
//      <h1 className='heading'>User Profile</h1>
//     <div style={{display:'flex',flexWrap:'wrap'}}>
//      {
//             profiles.map((_,i)=>(
//                 <UserProfile key={i}/>
//             ))
//      }   
//     </div>
   
//     </>
//   )
// }



// -------------------------------------------React-Bootstrap-----------------------------------------
// export default App;
//  import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Alert } from "react-bootstrap";
// import { Button } from 'react-bootstrap';
// import styled from 'styled-components'
// function App(){
//   const Head=styled.h4`
//   background-color:yellow;
//  border:1px solid purple;
//  padding:10px;
//  text-align:center;
//    color:purple;
//    border-radius:5px;
//    margin:20px;
//   `

// const Head=styled.h2({
//     backgroundColor:'yellow',
//  border:'1px solid purple',
//  padding:'10px',
//  textAlign:'center',
//    color:'purple',
//    borderRadius:'5px',
//    margin:'20px',
// })

// const StyledBtn=styled.button`
// color:red;
// width:130px;
// height:40px;
// margin:40px;
// font-size:1.2rem;
// `
//   return(
//     <>
//     <h1>Styled Component with React Js</h1>
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
 


//       <Head> Hello Heading </Head>
//       <Head> Hello Heading </Head>
//       <Head> Hello Heading </Head>
//       <Head> Hello Heading </Head>
//       <StyledBtn>Login</StyledBtn>
//       <br />
//       <Button onClick={()=>alert("YOu're now in Home Page")} variant="danger">go to home page</Button>
//       <Button variant="success">go to home page</Button>
//       <Button variant="warning">go to home page</Button>
//       <button onClick={()=>alert("YOu're now in Home Page")}>Simple Button</button>
//      <Alert variant="primary">hello bootstrap</Alert>
//     </>
//   )
// }
// export default App;


// --------------------------------useRef------------------------
// import { useRef } from "react";
// function App(){
//      const inputRef=useRef(null);
//      const inputHandler=()=>{
//       console.log(inputRef);
//       inputRef.current.focus();
//       inputRef.current.style.color='red';
//       inputRef.current.placeholder='use letters only'
//       inputRef.current.value='processing....'

//      }
// const toggleHandler=()=>{
//   if(inputRef.current.style.display!='none'){
//     inputRef.current.style.display='none';
//   }
//   else{
//     inputRef.current.style.display='inline'
//   }
// }
//   return(
//     <>
//     <h1>using useRef hook</h1>
//     <button onClick={toggleHandler}>toggle</button>
//     <input ref={inputRef} type="text"   placeholder="Enter Your Name"/>
//     <button onClick={inputHandler}>Focus on input field</button>
//     </>
//   )
// }

// export default App;

//-------------------------Uncontrolled Components-----------------
// import { useRef } from "react";
// function App(){
  
//   const userRef=useRef()
//   const passwordRef=useRef()
  
//    const handleForm=(event)=>{
//    event.preventDefault();
//    const user=document.querySelector('#user').value;
//    console.log("user name :  "+user);
//    const password=document.querySelector('#password').value;
//    console.log("user password : "+password);
//    }
   
//    const handleFormRef=(event)=>{
// event.preventDefault();
// const user=userRef.current.value;
// const password=passwordRef.current.value;
// console.log('handleFormRef',user,password);
//    }
//   return(
//     <>
//     <h1>Unctrolled Component</h1>
//     <form action="" method="post" onSubmit={handleForm}>
//       <input type="text" id="user" placeholder="Enter User Name!" /><br /><br />
//       <input type="password" id="password" placeholder="Enter User password" /><br /><br />
//       <button>
//         submit
//       </button>
//     </form><hr />
         
//          <h1>Uncontrolled components with useRef</h1>
//         <form action="" method="post" onSubmit={handleFormRef}>
//       <input type="text"  ref={userRef} id="userRef" placeholder="Enter User Name!" /><br /><br />
//       <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter User password" /><br /><br />
//       <button>
//         submit with ref
//       </button>
//     </form>
//     </>
//   )
// }
// export default App;

// import User from "./user";

// function App(){

//   const displayName=(name)=>{
//     alert('displaying function  ' +name);
//   }
//   const getUser=(userName)=>{
//     alert('get user function called: ' +userName);
//   }
//   return(
//     <>
//     <h1>Call Parent component Function from child componet</h1>
//     <User displayName={displayName} name="anil"  getUser={getUser} userName='user1'/>
//     <User displayName={displayName} name="pinku" getUser={getUser} userName='user2'/>
//     <User displayName={displayName} name="raksha" getUser={getUser} userName='user3'/>
//    <User displayName={displayName} name="sushma" getUser={getUser} userName='user4'/>
//     </>
//   )
// }

// export default App;

// ------------------------forwardRef------------------

// import UserInput from "./UserInput";
// function App(){
//    const updateRef=useRef(null);
//    const updateInput=()=>{
//     updateRef.current.value=1000;
//     updateRef.current.focus();
//     updateRef.current.style.border="5px solid green";
//     updateRef.current.style.backgroundColor="yellow";
//     updateRef.current.style.color="green";
//    }
//   return(
//     <>
//     <h1>Forward Ref</h1>
//     <UserInput ref={updateRef}/>
   
//     <button onClick={updateInput}>Update Input Field</button>
//     </>
//   )
// }

// export default App;

// --------------------useFormStatus Hook or useTransition hook-------------------
// import { useFormStatus } from "react-dom";
// function App(){
   
//    const [pending, setPending]=useState(false);
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     setPending(true);
//      await new Promise(
//       res=>setTimeout(res,2000));
//     console.log("submit");
//     setPending(false);
//   }

//   function CustomerForm(){
//     return(
//       <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter Name"/><br /><br />
//         <input type="password" placeholder="Enter Password" /><br /><br />
//         <button disabled={pending}>
//           {pending ? "submitting..." : "submit"}</button>
//       </form>
//       </div>
//     )
//   }
//   return(
//     <div>
//       <h1>useFormStatus Hook in React js</h1>
//       <CustomerForm />
//     </div>
//   )
// }
// export default App;

// function App(){
//   const [pending,startTransition]=useTransition();

//   const handleButton=()=>{
   
//    startTransition(async ()=>{
//       await new Promise(res=>setTimeout(res,2000));
//    })
     
//   }
//   return(
//     <div>
//       <h1>useTransition Hook in react js</h1>
//       {
//         pending ?
//         <img src="public/loading-gif.gif" style={{width:'50px',height:'50px'}} alt="" /> :null
//       }
//       <button onClick={handleButton} disabled={pending}>click</button>
//     </div>
//   )
// }
// export default App;

// ---------------KEEP COMPONENTS PURE----------------
//1. impure component example:-
// let count=2;
// function App(){

//   return(
//     <>
//     <h1>Keeping Components Pure</h1>
//     <Counter1 />
//      <Counter1 />
//       <Counter1 />
//        <Counter1 />
//         <Counter1 />
//     </>
//   )
// }
// const Counter1=()=>{
//   count=count+1;
//   return <h1>Counter {count}</h1>
// }
// export default App;

//if you want a pure commponet use props or state for changing a value of variable not the outside the scope variable.

// function App(){

//   return(
//     <>
//     <h1>Keeping Components Pure</h1>
//     <Cup />
    {/* <Counter1 count={1}/>
     <Counter1 count={2}/>
      <Counter1 count={3}/>
       <Counter1 count={4}/>
        <Counter1 count={5}/> */}
//     </>
//   )
// }
// const Counter1=({count})=>{
  
//   return <h1>Counter {count}</h1>
// }
// const Cup=()=>{
//   const [guest,setGuest]=useState(0);
   
  
//   return(
//     <>
//     <h1>We have {guest} guest and we have to make {guest} cup of tea</h1>

//     <button onClick={()=>setGuest(guest+1)}>Add guest</button>
//     </>
//   )
// }
// export default App;

// ---------------------Derived State----------------------
// function App(){
//     const [users,setUsers]=useState([]);
//     const [user,setUser]=useState('');
//     const handleAddUser=()=>{
//       setUsers([...users,user])
//     }
   
//     const total=users.length;
//     const lastUser=users[users.length-1];
//     const unique=[...new Set(users)].length;
//   return(
//     <div>
//       <h2>Total User : {total}</h2>
//       <h2>Last User : {lastUser} </h2>
//       <h2>Total Unique User : {unique}</h2>

//       <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="enter new user " />
//       <button onClick={handleAddUser}>add user</button>
//       {
//         users.map((item,index)=>(
//           <h4 key={index}>{item}</h4>
//         )
//         )
//       }
//     </div>
//   )
// }
// export default App;

//------------------------Lifting state Up in react js-----------------------
//  import AddUsers from "./AddUsers";
//  import DisplayUser from "./DisplayUser";
// function App(){
//   const [user,setUser]=useState('');
//   return(
//     <div>
//     <AddUsers setUser={setUser} user={user}/>
//     <DisplayUser user={user}/>
//     </div>
//   )
// }

// export default App;

//----------------------------UPDATING OBJECTS IN STATE-------------------
// function App(){
//   // const [name,setName]=useState('raksha')
//   const [data,setData]=useState({
//     name:'raksha',
//     address:{
//       city:'Delhi',
//       country:'India'
//     }
//   })
//   const handleName=(val)=>{
//   data.name=val;
//   setData({...data})
//   }
//   const handleCity=(city)=>{
//    data.address.city=city;
//    setData({...data,address:{...data.address,city}})
//   }
//   const handleCountry=(country)=>{
//     data.address.country=country;
//     setData({...data,address: {...data.address,country}})
//   }
//   return(
//     <div>
//       <h1>Updating objects in state</h1>
//       <input type="text" placeholder="Update Name " 
//       onChange={(event)=>handleName(event.target.value)} /><br /><br />
//        <input type="text" placeholder="Update City "
//       onChange={(event)=>handleCity(event.target.value)} /><br /><br />
//       <input type="text" placeholder="Update country "
//       onChange={(event)=>handleCountry(event.target.value)} /><br /><br /><hr />
//       <h1>Name : {data.name}</h1>
//       <h1>City : {data.address.city}</h1>
//       <h1>Country : {data.address.country}</h1>
//     </div>
//   )
// }
// export default App;

//  function App(){
//   const[data,setData]=useState([
//    'raksha','pinku','akki','tony'
//   ])
//   const [dataDetails,setDataDetails]=useState([
//     {name:'raksha',age:'22'},
//     {name:'pinku',age:'25'},
//     {name:'akki',age:'19'},  
//   ])
//   const handleUser=(name)=>{
//     data[data.length-1]=name;
//     setData([...data],data)
//   }
// const handleAge=(age)=>{
//     dataDetails[dataDetails.length-1].age=age;
//     setDataDetails([...dataDetails],dataDetails)
// }
//   return(
//     <div>
//       <h1>Updating Array in State</h1>
//       <input type="text" placeholder="enter name " onChange={(e)=>handleUser(e.target.value)} />
//       {
//         data.map((item,index)=>{
//           return(
//           <>
//           <h3 kay={index}>{item}</h3>
//           </>)
//         })
//       }
//       <hr />
//       <input type="text" placeholder="enter name " onChange={(e)=>handleAge(e.target.value)} />
//       {
//         dataDetails.map((item,index)=>(
//           <h4 key={index}>{item.name}, {item.age}</h4>
//         ))
//       }
//     </div>
//   )
// }
// export default App;
import {Card,Button,Form} from 'react-bootstrap';
import { useActionState } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function App(){
  const handleSubmit=async(previousData,formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');
   
    await new Promise(res=>setTimeout(res,2000));
     console.log("name : ",name," | and Password : ",password);
     if(name && password){
      return {message:'data Submitted',name,password}
     }else{
      return {error:'Failed to submit. Enter proper Data',name,password}
     }
  }
  const [data,action,pending]=useActionState(handleSubmit,undefined);


  return(
   <Container className="mt-5 pt-5">
    <Row className="justify-content-center">
      <Col md={6} lg={5}>
      <Card className="p-4 shadow-lg rounded-4 bg-light">
      <h1 className="text-center fs-1 pb-4 text-uppercase">Login</h1>
      <Form action={action}>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control
          type="text" defaultValue={data?.name} placeholder="Enter Name" name='name' 
          />
        </Form.Group>
        <br /><br />
        <Form.Group className="mb-1">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" defaultValue={data?.password} placeholder="Enter Password" name='password' />
        </Form.Group>
<br /><br />
        <Button  disabled={pending} variant="danger" className="w-100" type="submit" >
          {pending ? 'submitting...' : 'Submit Data'}
        </Button><br></br>
          {data?.error && <p className="text-danger text-center mt-3">{data?.error}</p>}
          {data?.message && <p className="text-success text-center mt-3">{data?.message}</p>}
      </Form>
       </Card><hr className="my-5" />
       <Card className="shadow-lg my-4 p-3">
        <h4 className="text-capitalize text-center">submitted data</h4>
      <p><strong>Name : </strong>{data?.name || '-'}</p>
     <p><strong>Password : </strong>{data?.password || '-'}</p>
     </Card>
      </Col>
      </Row>
   </Container>
  )
}