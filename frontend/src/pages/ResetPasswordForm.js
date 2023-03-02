import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import '../css/Login.css'
import { useResetPassword } from '../hooks/useResetPassword';

const ResetPasswordForm = (props) => {
    let navigate = useNavigate();

    const [ otpCode, setOtpCode ] = useState('')
    const [ password, setPassword ] = useState('')
    const { resetPassword, isLoading, error, emptyFields, showLogin } = useResetPassword()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        await resetPassword(props.email,otpCode,password)
        if(showLogin){
            navigate('/login')
        }
    }

    return (
        <form className='login' style={{padding:"20px"}}>
            <h3>Reset Password</h3>

            <label>Otp:</label>
            <input 
                type='number' 
                maxLength= '4'
                onChange={(e)=>setOtpCode(e.target.value)} 
                value={otpCode} 
                className={emptyFields && emptyFields.includes('email') ? 'error' : ''}
            />

            <label>New Password:</label>
            <input 
                type='password' 
                onChange={(e)=>setPassword(e.target.value)} 
                value={password} 
                className={emptyFields && emptyFields.includes('password') ? 'error' : ''}
            />


            <button disabled={isLoading} onClick={handleSubmit}> Reset Password </button>
            { error && <div className='error'>{ error }</div>}
        </form>
    )
}

export default ResetPasswordForm