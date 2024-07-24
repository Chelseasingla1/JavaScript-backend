import React , {useState} from 'react'

export default function UpdateStudentForm2(props) {
    const[name, setName] = useState(props.name)
    const handleForm = (event)=>{
        event.preventDefault()
        props.update(name)
    };
  return (
    <div>
        <form onSubmit={handleForm}>
            <label> Name : </label>
            <input type="text" value ={name } onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Name"></input>
            {/* <label> Age : </label>
            <input type="text" value ={age}  onChange={(event)=>{setAge(event.target.value)}}placeholder="Enter Age"></input>
            <label> Grade : </label>
            <input type="text"value ={grade}  onChange={(event)=>{setGrade(event.target.value)}} placeholder="Enter Grade"></input>
            <label> School : </label>
            <input type="text" value ={school}  onChange={(event)=>{setSchool(event.target.value)}} placeholder="Enter School"></input>
            <button> Update </button>
            <h1> *******************************************</h1>  */}
            <button> Update </button>
        </form>
    </div>
  )
}