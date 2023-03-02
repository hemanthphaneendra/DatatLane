import { useEffect, useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import { useMessageContext } from '../hooks/useMessageContext';

import '../css/Chat.css';

const Chat = () => {
    const {messages, dispatch } = useMessageContext()
    const { user } = useAuthContext()
    const [message, setMessage] =useState('')

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetch('/api/message', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_MESSAGES',payload: json})
            }
        }

        fetchMessages()
    },[dispatch, user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({user:user['email'], message})
        })

        const json = await response.json()

        if(response.ok) {
            setMessage('')
            dispatch({type: 'CREATE_MESSAGE',payload: json})
        }
    }

    return (
        <div className='chat' style={{display:'flex'}}>
                <ul id="messages">
                    { 
                        messages && 
                        messages.map(
                            message => 
                                <li key={message._id} style={{paddingTop:"20px"}}>
                                    <div className={`message-bubble-${user['email'] === message.user ? 'me':'their'}`}
                                    style={{marginLeft:user['email'] === message.user ? 'auto':'0'}}
                                    >
                                        <label 
                                        style={{marginBottom:"5px"}}>
                                            {message.user}
                                        </label>
                                        <p>{message.message}</p>
                                    </div>
                                </li>
                            ) 
                    }
                </ul>
            <div id="sendform">
                <form onSubmit={handleSubmit} style={{display:"flex"}}>
                    <input type="text" 
                    className="message-input" value={message} 
                    onChange={e => setMessage(e.target.value)} />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat