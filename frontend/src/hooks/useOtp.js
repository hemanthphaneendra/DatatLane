import { useState } from "react"

export const useOtp = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [emptyFields, setEmptyFields] = useState([])
    const [showOtpForm, setShowOtpForm] = useState(true)

    const sendEmail = async (email) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/email-send', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setShowOtpForm(false)
            setIsLoading(false)
            setEmptyFields([])
        }
    }

    return { sendEmail, isLoading, error, emptyFields, showOtpForm }
}