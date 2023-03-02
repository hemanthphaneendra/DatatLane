import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

import '../css/Login.css'

const Login = () => {
    let navigate = useNavigate();

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { login, isLoading, error, emptyFields } = useLogin()
    const [userType, setUserType] = useState('Trainee')
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email,password,userType)
    }

    const handleClick = () => {
        navigate('/sendEmail')
    }
    return (
        <form className='login' onSubmit={handleSubmit}>
            <div style={{width:"400px",display:"flex"}}>
                <input type="button" class="button" value="Trainee" 
                onClick={e=>setUserType('Trainee')} 
                style={{marginTop:"0px",backgroundColor:userType==='Trainee'?"#4CAF50":'#ddd',cursor:"pointer"}}
                />
                <input type="button" class="button" value="Trainer" 
                onClick={e=>setUserType('Trainer')} 
                style={{marginTop:"0px",backgroundColor:userType==='Trainer'?"#4CAF50":'#ddd',cursor:"pointer"}}
                />
                <input type="button" class="button" value="Team" 
                onClick={e=>setUserType('Team')} 
                style={{marginTop:"0px",backgroundColor:userType==='Team'?"#4CAF50":'#ddd',cursor:"pointer"}}
                />
            </div>
            <div style={{marginLeft:"20px",marginRight:"20px",marginBottom:"20px"}}>
                <h3>Log in</h3>

                <label>Email:</label>
                <input 
                    type='email' 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email} 
                    className={emptyFields && emptyFields.includes('email') ? 'error' : ''}
                />

                <label>Password:</label>
                <input 
                    type='password' 
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password} 
                    className={emptyFields && emptyFields.includes('password') ? 'error' : ''}
                />

                <p onClick={handleClick}>Forgot Password?</p>

                <button disabled={isLoading}> Log in </button>
                { error && <div className='error'>{ error }</div>}
            </div>
        </form>
    )
}

export default Login