import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signin = ()=>{
    const history = useHistory("") 
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({
                html:"Invalid email",
                classes:"#c62828 red dareken-3"
            })
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
               })
        }).then(res => res.json())
        .then(data =>{
            if(data.error){
                M.toast({
                    html:data.error,
                    classes:"#c62828 red dareken-3"
                })
            }
            else{
                console.log(data)
                M.toast({
                    html:"Sign in success   ",
                    classes:"#43a047 green darken-1"
                })
                history.push("/")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="mycard">
             <div className="card auth-card input-field">
               <h2>Instagram</h2>
               <input type="text" placeholder="email"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                />
                <input type="password" placeholder="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                />
               <button className="btn waves-effect waves-light #29b6f6 light-blue darken-1"
               onClick={()=>PostData()}
               >
                Signin
               </button>
               <h5>
                <Link to="/signin">Don't have an account ?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin