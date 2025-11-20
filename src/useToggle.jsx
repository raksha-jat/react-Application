import { useState } from "react";

const useToggler=(defaultVal)=>{
    const [value,setvalue]=useState(defaultVal);
    function toggleValue(val){
      // console.log(val)
     if(typeof val!='boolean'){
      // console.log('if')
        setvalue(!value)
     }
     else{
      // console.log('else')
        setvalue(val)
     }
    }  return [value,toggleValue]
}
export default useToggler;