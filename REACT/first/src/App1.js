import React , {useState} from 'react'
import StudentCard1 from './StudentCard1'
import UpdateStudentForm1 from './UpdateStudentForm1'

export default function App1
() {
    const[name, setName] = useState("")
const[age, setAge] = useState()
const[grade, setGrade] = useState("")
const[school, setSchool] = useState("")
const[detailsFlag, setDetailsFlag] = useState(false)
const update = (name, age, grade, school)=>{
    setName(name)
    setAge(age)
    setGrade(grade)
    setSchool(school)
}
const handleForm=(event)=>{
    event.preventDefault()
    // update(name, age, grade, school)
    setDetailsFlag(true)
}
if(detailsFlag){
    return(
        <div>
    <StudentCard1 name ={name} age={age} grade={grade} school={school}></StudentCard1>  
    <UpdateStudentForm1 name ={name} age={age} grade={grade} school={school} update={update}></UpdateStudentForm1>
    </div>)
}
  return (
    <div>
       <h1>ADD STUDENT DETAILS</h1>
       <form onSubmit={handleForm}>
            <label> Name : </label>
            <input type="text" value ={name } onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Name"></input>
            <label> Age : </label>
            <input type="number" value ={age}  onChange={(event)=>{setAge(event.target.value)}}placeholder="Enter Age"></input>
            <label> Grade : </label>
            <input type="text"value ={grade}  onChange={(event)=>{setGrade(event.target.value)}} placeholder="Enter Grade"></input>
            <label> School : </label>
            <input type="text" value ={school}  onChange={(event)=>{setSchool(event.target.value)}} placeholder="Enter School"></input>
            <button> Submit </button>
          
        </form>
   
    </div>
  )
}
