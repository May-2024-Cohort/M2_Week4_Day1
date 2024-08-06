import axios from 'axios'
import {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function EditStudent() {
    const [name,setName] = useState('')
    const [country,setCountry] = useState('')
    

    const {id} = useParams()

    // step 1: get the student information that needs to be edited
    // step 2: store the values of the student information in a state
    // step 3: display the values on the page in a form with the onChange
    // step 4: send a put request with the updated information to the endpoint

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://omar-class-api.adaptable.app/students/${id}`)
        .then((oneStudent)=>{
            setName(oneStudent.data.name)
            setCountry(oneStudent.data.country)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    function handleSubmit(e){
        e.preventDefault()

        axios.put(`https://omar-class-api.adaptable.app/students/${id}`,{name:name,country:country})
        .then(()=>{
            alert("User information updated")
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </label>
            <label>
                Country:
                <input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} />
            </label>

            <button>Update student Information</button>
        </form>
    </div>
  )
}

export default EditStudent