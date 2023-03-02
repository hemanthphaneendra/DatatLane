import { useState } from 'react';
import { useOtp } from '../hooks/useOtp';
import { useNavigate } from 'react-router-dom';
import ResetPasswordForm from './ResetPasswordForm';
import '../css/Login.css'

const OtpForm = () => {
    let navigate = useNavigate();

    const [ email, setEmail ] = useState('')
    const { sendEmail, isLoading, error, emptyFields, showOtpForm } = useOtp()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        await sendEmail(email)

    }

    const handleBackClick = (e) => {
        e.preventDefault()
        navigate('/login')

    }
    return (
        <>
            { showOtpForm ? 
                <form className='login' style={{padding:"20px"}}>
                    <h3>Reset Password</h3>

                    <label>Email:</label>
                    <input 
                        type='email' 
                        onChange={(e)=>setEmail(e.target.value)} 
                        value={email} 
                        className={emptyFields && emptyFields.includes('email') ? 'error' : ''}
                    />

                    <button disabled={isLoading} onClick = { handleSubmit }> Send Otp </button>
                    <button className='backButton' disabled={isLoading} onClick = { handleBackClick } >Back</button>
                    { error && <div className='error'>{ error }</div>}
                </form> 
                : <ResetPasswordForm email={email}/>
            }
        </>
    )
}

export default OtpForm