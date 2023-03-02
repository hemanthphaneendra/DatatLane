import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";

const Projects = () => {
    const { user } = useAuthContext()
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        const fetchPOCs = async () => {
            const response = await fetch('/api/project',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json();

            if(response.ok) {
                setProjects(json)
            }
        }

        fetchPOCs()
    }, [user]);

    return (
        <div style={{marginLeft:"275px",border:"1px solid black",marginTop:"30px",marginRight:"50px",borderRadius:"20px"}}>
            <p style={{margin:"20px",fontWeight:"bold",fontSize:"18px"}}>Some Of The Bigger Projetcs We Completed</p>
            { projects && 
                projects.map(
                    project => 
                    <div style={{borderTop:"1px solid black",padding:"20px"}}>
                        <p style={{fontWeight:"bold",fontSize:"18px"}}>{project.title}</p>
                        <p style={{marginTop:"20px",fontSize:"15px"}}>{project.description}</p>
                        <div style={{display:"flex",marginTop:"10px"}}>
                            <p style={{fontSize:"15px",paddingRight:"10px"}}>Completed By: </p>
                            <p style={{fontWeight:"bold",fontSize:"15px"}}>{project.completedBy}</p>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default Projects