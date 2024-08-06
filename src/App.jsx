
import './App.css'
import {Routes, Route} from 'react-router-dom'
import AllStudents from './pages/AllStudents'
import OneStudent from './pages/OneStudent'
import CreateStudent from './pages/CreateStudent'
import EditStudent from './pages/EditStudent'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AllStudents/>}/>
        <Route path="/students/:id" element={<OneStudent/>}/>
        <Route path="/students/create" element={<CreateStudent/>}/>
        <Route path="/students/:id/edit" element={<EditStudent/>}/>


      </Routes>
    </>
  )
}

export default App
