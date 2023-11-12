import { useState } from "react";


const Form = () => {

const [name,setName]=useState(null);
const [email,setEmail]=useState(null);
const [password,setPassword]=useState(null);
const [eror,setEror]=useState(null);


    const handlesubmit =(e)=>{
        e.preventDefault();
        if(password.length <8){
            setEror('Password soitar kom disos kn')
        }
        else {
            setEror('')
            console.log(name,email,password)
        }
        
      
    }
    const handlesetName=(e)=>{
          setName(e.target.value)
    }

    const handleemail= (e)=>{
        setEmail(e.target.value)
    }
    const handlepassword =(e)=>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handlesubmit} className="flex flex-col border-2 bg-orange-500 w-96">
                <input onChange={handlesetName} type="text" name="name"/>
                <input onChange={handleemail} type="email" name="email" id="" />
                <input onChange={handlepassword} type="password" name="password" id="" />

                <input type="submit" value="submit" />

                {
                    eror && <p>{eror}</p>
                }
            </form>
        </div>
    );
};

export default Form;