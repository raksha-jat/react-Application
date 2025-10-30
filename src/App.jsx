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
import Login,{SignUp,Profile,UserKey} from './UserComponent'
function App(){
  console.log(sum());
  return(
    <div>
    <h1>FIRST Component :  {sum()}</h1>
    <Fruit></Fruit>
    <h1>{UserKey}</h1>
    <Colors />
    <Login />
    <SignUp />
    <Profile />
        </div>
  )
}

function Fruit(){
  return(
    <h1>Apple</h1>
  )
}
function Colors(){
  return(
   <ul>
    <li>Blue</li>
    <li>Red</li>
   </ul>
  )
}
function sum(){
  return "testing js in react"
}
export default App;