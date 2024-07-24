import React,{useState} from 'react'
import UpdateStudentForm2 from './UpdateStudentForm2';
import StudentCard2 from './StudentCard2';
export default function App2() {
    const[name,setName] = useState("");
    const update = (name)=>{
        setName(name)
    }
    const[detailsFlag, setDetailsFlag] = useState(false)
    const handleForm=(event)=>{
        event.preventDefault()
        // update(name, age, grade, school)
        setDetailsFlag(true)
    }
    if(detailsFlag){
        return(
            <div>
        <StudentCard2 name ={name}></StudentCard2>  
        <UpdateStudentForm2 name ={name}></UpdateStudentForm2>
        </div>)
    }
  return (
    
    <div>
         <form onSubmit={handleForm}>
            <label> Name : </label>
            <input type="text" value ={name } onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Name"></input>
            {/* <label> Age : </label>
            <input type="number" value ={age}  onChange={(event)=>{setAge(event.target.value)}}placeholder="Enter Age"></input>
            <label> Grade : </label>
            <input type="text"value ={grade}  onChange={(event)=>{setGrade(event.target.value)}} placeholder="Enter Grade"></input>
            <label> School : </label>
            <input type="text" value ={school}  onChange={(event)=>{setSchool(event.target.value)}} placeholder="Enter School"></input> */}
            <button> Submit </button>
          
        </form>
    </div>
  )
}
