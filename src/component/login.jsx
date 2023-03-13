import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'

const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let submit = (e) => {
        
        e.preventDefault()

        if (email == "admin@gmail.com" && password == 12345) {
            navigate('/admin')

        }
        else {
            alert('invaild credentials')
        }



    }
    return (
        <div className="login">
             <div className="image">
                        <img height="280px" width="480px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3EZr0f7FY0UX_mXGSTDo3U__OgUZsjggIUUj33MDBeGQ6wNBsj3XBehN1XAfch80rO8&usqp=CAU" alt=""/>
                    </div>
            <div className="login_form">
                <h1 className="heading">Library Management</h1>
                <h1 className="subhead">Login Form</h1>    
                <form action="" onSubmit={submit}>

                    <h1>Login</h1>

                    <div className="email">
                        <p>Email</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter email adress" />
                    </div>

                    <div className="pass">
                        <p>Password</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="enter password" />
                    </div>

                    <div className="button">
                        <button>Login</button>
                    </div>

                   
                </form>
            </div>
        </div>
    );
}

export default Login;