import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";

const POC = () => {
    const { user } = useAuthContext()
    const [pocs, setPocs] = useState([])

    useEffect(()=>{
        const fetchPOCs = async () => {
            const response = await fetch('/api/poc',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json();

            if(response.ok) {
                setPocs(json)
            }
        }

        fetchPOCs()
    }, [user]);

    return (
        <div style={{marginLeft:"275px",border:"1px solid grey",marginTop:"30px",marginRight:"50px",borderRadius:"20px"}}>
            <p style={{margin:"20px",fontWeight:"bold",fontSize:"18px"}}>Some of the POCs we did</p>
            { pocs && 
                pocs.map(
                    poc => 
                    <div style={{borderTop:"1px solid grey",padding:"20px"}}>
                        <p style={{fontWeight:"bold",fontSize:"18px"}}>{poc.title}</p>
                        <p style={{marginTop:"20px",fontSize:"15px"}}>{poc.description}</p>
                        <div style={{display:"flex",marginTop:"10px"}}>
                            <p style={{fontSize:"15px",paddingRight:"10px"}}>Completed By: </p>
                            <p style={{fontWeight:"bold",fontSize:"15px"}}>{poc.completedBy}</p>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default POC