import { useState } from "react"

export const useResetPassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [emptyFields, setEmptyFields] = useState([])
    const [showLogin, setShowLogin] = useState(false)

    const resetPassword = async (email,otpCode,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/change-password', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,otpCode,password})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setIsLoading(false)
            setEmptyFields([])
            setShowLogin(true)
        }
    }

    return { resetPassword, isLoading, error, emptyFields, showLogin }
}