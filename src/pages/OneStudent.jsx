import {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function OneStudent() {
    const [student,setStudent] = useState(null)

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{

        axios.get(`https://omar-class-api.adaptable.app/students/${id}`)
        .then((oneStudent)=>{
            setStudent(oneStudent.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function deleteStudent(){
        axios.delete(`https://omar-class-api.adaptable.app/students/${id}`)
        .then(()=>{
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        {student && (
            <div>
                <h1>{student.name}</h1>
                <p>{student.country}</p>
                
                <button onClick={deleteStudent}>Delete Student</button>
            </div>
        )}
    </div>
  )
}

export default OneStudent