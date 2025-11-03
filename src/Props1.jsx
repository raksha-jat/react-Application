// function User({name,age}) {
 
//   return (
//     <div>
//       <h1>name: {name}</h1>
//       <h1>age: {age}</h1>
//     </div>
//   );
// }
function User({user}) {
 
  return (
    <div>
      <hr />
      <h1>name: {user.Name}</h1>
      <h1>age: {user.age}</h1>
      <h1>email: {user.email}</h1>
    </div>
  );
}

export default User;
