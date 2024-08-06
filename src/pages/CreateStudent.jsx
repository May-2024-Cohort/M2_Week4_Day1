import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function CreateStudent() {
    const [name,setName] = useState("")
    const [country,setCountry] = useState("")


    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()

        let newStudent = {name:name,country:country}
        axios.post('https://omar-class-api.adaptable.app/students/', newStudent)
        .then(()=>{
            alert("Congrats user is made")
            navigate('/')

        })
        .catch((err)=>{console.log(err)})


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
            </label>
            <label>
                Country:
                <select name="" onChange={(e)=>{setCountry(e.target.value)}} >
                <option value="Bahrain">Choose Country</option>

                    <option value="Bahrain">Bahrain</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>

                </select>
            </label>

            <button>Create Student</button>
        </form>
    </div>
  )
}

export default CreateStudent