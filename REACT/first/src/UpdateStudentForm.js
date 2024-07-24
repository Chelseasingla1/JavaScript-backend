import React, {useState} from 'react'

export default function UpdateStudentForm({updateStudentDetails}) {

    const [Data, setData] = useState({
        name: '',
        age: '',
        grade:'',
        school:''
    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
            // [age]: value
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
      updateStudentDetails(Data);
      setData({
        name: '',
        age: '',
        grade:'',
        school:''
      });
      
    };


  return (
   <form onSubmit={handleSubmit}>
    <input 
    type="text"
    name="name"
    value={Data.name}
    onChange={handleChange}
    placeholder="Name"
    />
    <input 
    type="text"
    name="age"
    value={Data.age}
    onChange={handleChange}
    placeholder="age"
    />
    <button type="submit">Update Student</button>
   </form>
  )
}
