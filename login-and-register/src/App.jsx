import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toggler,setToggler]=useState(true)
 const togglerBtn=()=>{
  setToggler(prev=>!prev)
}
const formHandler=(e,form)=>{
  e.preventDefault();
  let obj=e.target
  // if true means login
  if(form)
  {
    (obj.username.value!==''&&obj.password.value!=='')?
    obj={username:obj.username.value,password:obj.password.value}
    :
    alert('enter all fields correctly')
  }else{
    (obj.username.value!==''&&obj.password.value!==''&&obj.email.value!=='')?
    obj={username:obj.username.value,email:obj.email.value,password:obj.password.value}
    :alert('enter all fields correctly')
  }
console.log(obj)
}
  return (
<>

<div className="full row flexAIC flexJCC" style={{minHeight:"100vh"}}>
{(toggler)?
<form className="col w30 brd lbg p1" id="form1" style={{minWidth:"400px"}} onSubmit={(e)=>formHandler(e,true)}>
<label htmlFor="Username" className='m2'>Username: </label>
<input placeholder="Enter text..." type="text" name="username" className='line brd m2 p3' />
<label htmlFor="Password" className='m2'>Password: </label>
<input placeholder="Enter text..." type="text" name="password" className='line brd m2 p3' />
<button className="btn brd dbg p3 m2" type="submit" >Submit</button>
<button className="btn brd dbg p3 m2" type='button' onClick={togglerBtn}>Register</button>
</form>
:
<form className="col w30 brd lbg p2" id="form2" style={{minWidth:"400px"}} onSubmit={(e)=>formHandler(e,false)}>
<label htmlFor="Username" className='m2'>Username: </label>
<input placeholder="Enter text..." type="text" className='line brd m2 p3' name="username"/>
<label htmlFor="Password" className='m2'>Password: </label>
<input placeholder="Enter text..." type="text" className='line brd m2 p3'  name="password"/>
<label htmlFor="Password" className='m2'>Email: </label>
<input placeholder="Enter text..." type="text" className='line brd m2 p3' name="email" />
<button className="btn brd dbg p3 m2" type='submit'>Submit</button>
<button className="btn brd dbg p3 m2" type='button'  onClick={togglerBtn}>Already Registerd</button>
</form>
}
    </div>
</>
  );
}

export default App;
