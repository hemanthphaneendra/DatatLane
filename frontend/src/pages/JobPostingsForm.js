import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

import '../css/JobPostingForm.css';

const JobPostingForm = () => {
    const { user } = useAuthContext()

    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState('')
    const [ level, setLevel ] = useState('entry');
    const [ skills, setSkills ] = useState('');
    const [ successMessage, setSuccessMessage ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const skillOptions = [
        { label: 'Entry', value: 'entry' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Expert', value: 'expert' },
      ];
     
      const handleChange = (event) => {
        setLevel(event.target.value);
      };

      const handleSubmit = async (e) =>{
        e.preventDefault()

        const response = await fetch('/api/jobPostings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({title, price, description, level, skills })
        })

        await response.json()

        if(response.ok) {
            setTitle('');
            setPrice(0);
            setDescription('');
            setLevel('entry');
            setSkills('')
            setSuccessMessage('Job Posted Successfully')
        }
        if(!response.ok) {
            setErrorMessage('Something Went Wrong! Please Try Again Later')
        }
      }
    return (
        <div style={{marginLeft:"260px"}} >
            <h3 style={{textAlign:"center", paddingTop:"20px"}}>Post a Job</h3>
            <form className="jobPostingForm" onSubmit={handleSubmit}>

            <label>Title:</label>
            <input 
            type="text" 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />

            <label>Salary in ($/hr):</label>
            <input
            type="number"
            value={price}
            onChange={e=>setPrice(e.target.value)} 
            />

            <label>Required Skill Level:</label>
            <select value={level} onChange={handleChange}>

            {skillOptions.map((option) => (

                <option value={option.value}>{option.label}</option>

            ))}

            </select>

            <label>Description:</label>
            <textarea 
            value={description}
            onChange={e=>setDescription(e.target.value)}
            />

            <label>Required Skills:</label>
            <input 
            value={skills}
            onChange={e=>setSkills(e.target.value)}
            />

            <button type="submit">Post a Job</button>

            { successMessage && <div className='success'>{ successMessage }</div>}

            { errorMessage && <div className='error'>{ errorMessage }</div>}
            </form>
        </div>
    );
}

export default JobPostingForm;