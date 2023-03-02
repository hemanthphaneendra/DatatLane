import { useEffect, useState } from 'react';
import SupportWorkCards from './SupportWorkCards';
import { useAuthContext } from "../hooks/useAuthContext";
import '../css/SupportWork.css';

const SupportWork = () => {
    const { user } = useAuthContext()
    const [supportWorkUsers, setSupportWorkUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchSupportWorkUsers = async () => {
            const response = await fetch('/api/supportWork',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(response.ok) {
                setSupportWorkUsers(json)
            }
        }

        fetchSupportWorkUsers()
    },[user])

      
    return (
        <div style={{marginLeft:'200px'}}>
            <input type="text" 
            style={{marginLeft:"70px",marginTop:"40px",height:"35px",width:"88%",paddingLeft:"15px"}} 
            placeholder='Search' onChange={e=>setSearchTerm(e.target.value)}
            />
            { supportWorkUsers && 
                <SupportWorkCards supportWorkUsers={supportWorkUsers.filter(
                    supportWorkUser=>{
                        if(searchTerm == '') {
                            return supportWorkUser;
                        }
                        else if(supportWorkUser.expertise.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return supportWorkUser;
                        }
                    }
                )}/>
            }
        </div>
    )
}

export default SupportWork