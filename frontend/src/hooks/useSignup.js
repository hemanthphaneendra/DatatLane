import { useState } from "react"
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()
    const [emptyFields, setEmptyFields] = useState([])

    const signup = async (email, password, userType) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password,userType})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            setEmptyFields([])
        }
    }

    return { signup, isLoading, error, emptyFields }
}