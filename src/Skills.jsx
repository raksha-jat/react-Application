
import { useState } from "react";
import User from "./user";
function Skills(){
    const [skills, setSkills]=useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value]);
        }
        else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }

    return(
        <div>
            <h3>Select your Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">PHP</label>
            <br />
            <br />
             <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
            <label htmlFor="js">JS</label>
            <br />
            <br />
             <input onChange={handleSkills} type="checkbox" id="java" value="java"/>
            <label htmlFor="java">JAVA</label>
            <br />
            <br />
             <input onChange={handleSkills} type="checkbox" id="html" value="html"/>
            <label htmlFor="html">HTML</label>
            <br />
            <br />
             <input onChange={handleSkills} type="checkbox" id="python" value="python"/>
            <label htmlFor="python">PYTHON</label>
            <br />
            <h3>{skills.toString()}</h3>
        </div>
    )
    
}
export function RadioButon(){
    const [gender,setGender]=useState('female');
    const [city,setCity]=useState("Delhi")
    return(
        <div>
            <h3>HANDLE RADIO BUTTON</h3>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="male" value={"male"} checked={gender=='male'}/>
            <label htmlFor="male">Male</label>
             <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="female" value={"female"} checked={gender=='female'}/>
             <label htmlFor="female">Female</label>
             <h2>Selected Gender: {gender}</h2>
             <h3>Select City : </h3>
             <select  onChange={(event)=>setCity(event.target.value)} defaultValue={"harda"} >
                <option value="noida">Noida</option>
                <option value="gurgaon">gurgaon</option>
                <option value="banglore">banglore</option>
                <option value="indore">indore</option>
                <option value="harda">harda</option>
                <option value="delhi">Delhi</option>                
             </select>
             <h2>Selected City : {city}</h2>
        </div>
    )
}

export function Looping(){
    const userData=[
        {
          name:'raksha',
          age:22,
          email:"raksha@gmail.com",
          id:1
        },
         {
          name:'priyanka',
          age:24,
          email:"pinku@gmail.com",
          id:2
        },
         {
          name:'akki',
          age:20,
          email:"akki@gmail.com",
          id:3
        },
         {
          name:'annu',
          age:19,
          email:"annu@gmail.com",
          id:4
        },
        ]
    return(
        <div>
            <h2>Loop in JSX with Map Function</h2>
            
            <table border="1">
                <thead>
                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>age</td>
                    <td>email</td>
                </tr>
                </thead>
                <tbody>
             {
                 userData.map((user)=>{
                return(<tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr> );
           })
            }
                </tbody>
            </table>
        </div>
    )
}

export function ReuseComponentInLoop(){
    const userData=[
        {
          name:'raksha',
          age:22,
          email:"raksha@gmail.com",
          id:1
        },
         {
          name:'priyanka',
          age:24,
          email:"pinku@gmail.com",
          id:2
        },
         {
          name:'akki',
          age:20,
          email:"akki@gmail.com",
          id:3
        },
         {
          name:'annu',
          age:19,
          email:"annu@gmail.com",
          id:4
        },
        ]
    
    return(
        <div>
            <h1>Reuse Component in Loop</h1>
              {
             userData.map((user)=>{
              return <div key={user.id}>
                <User data={user}/></div>
               
             })
        }
            </div>
      
    )
}
export default Skills;