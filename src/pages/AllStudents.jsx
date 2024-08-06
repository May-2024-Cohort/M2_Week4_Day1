import {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



function AllStudents() {

    const [students,setStudents] = useState([])

    // axios, useEffect, useState

    useEffect(()=>{
        axios.get('https://omar-class-api.adaptable.app/students')
        .then((allStudents)=>{
            setStudents(allStudents.data)

        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
        {students.map((oneStudent)=>{
            return(
                <div key={oneStudent.id}>
                    <h3>{oneStudent.name}</h3>
                    <p>{oneStudent.country}</p>
                    <button><Link to={`/students/${oneStudent.id}`}>Go See Student Information</Link></button>
                    <button><Link to={`/students/${oneStudent.id}/edit`}>Edit Student Information</Link></button>

                </div>
            )
        })}
    </div>
  )
}

export default AllStudents