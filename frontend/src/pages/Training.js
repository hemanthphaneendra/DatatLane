import { useEffect, useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import '../css/Training.css'

{/* <li>UI / UX</li>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li> */}
const Training = () => {
    const { user } = useAuthContext()
    const [trainingProfiles, setTrainingProfiles] = useState([])

    useEffect(() => {
        const fetchTrainingProfiles = async () => {
            const response = await fetch('/api/training',{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(response.ok) {
                setTrainingProfiles(json)
            }
        }

        fetchTrainingProfiles()
    },[user])

    const rows = trainingProfiles.reduce(function (rows, key, index) { 
        return (index % 3 === 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

    return (
        <div className='training' style={{marginLeft:"250px"}}>
            { rows && rows.map(row=>(
                <div className='cards-row'>
                    <div class="card-container" key={row[0]._id}>
                        <img class="round" 
                        src="https://randomuser.me/api/portraits/women/79.jpg" 
                        alt="user" 
                        />
                        <h3>{ row[0].name }</h3>
                        <h6>{ row[0].city }</h6>
                        <p>{ row[0].role }</p>
                        <div class="buttons">
                            <button class="primary">
                                Hire Me!
                            </button>
                        </div>
                        <div class="skills">
                            <h6>Skills</h6>
                            <ul>
                                {row[0].skills.map(skill=>(
                                    <li>{ skill }</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    { row[1] && <div class="card-container" key={row[1]._id}>
                        <img class="round" 
                        src="https://randomuser.me/api/portraits/women/79.jpg" 
                        alt="user" 
                        />
                        <h3>{ row[1].name }</h3>
                        <h6>{ row[1].city }</h6>
                        <p>{ row[1].role }</p>
                        <div class="buttons">
                            <button class="primary">
                                Hire Me!
                            </button>
                        </div>
                        <div class="skills">
                            <h6>Skills</h6>
                            <ul>
                                {row[1].skills.map(skill=>(
                                    <li>{ skill }</li>
                                ))}
                            </ul>
                        </div>
                    </div> }
                    { row[2] && <div class="card-container" key={row[2]._id}>
                        <img class="round" 
                        src="https://randomuser.me/api/portraits/women/79.jpg" 
                        alt="user" 
                        />
                        <h3>{ row[2].name }</h3>
                        <h6>{ row[2].city }</h6>
                        <p>{ row[2].role }</p>
                        <div class="buttons">
                            <button class="primary">
                                Hire Me!
                            </button>
                        </div>
                        <div class="skills">
                            <h6>Skills</h6>
                            <ul>
                                {row[2].skills.map(skill=>(
                                    <li>{ skill }</li>
                                ))}
                            </ul>
                        </div>
                    </div> }
                </div>
            ))}
        </div>
    )
}

export default Training