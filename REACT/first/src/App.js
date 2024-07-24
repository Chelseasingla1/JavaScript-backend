import React , {useState}from 'react'
import StudentCard from './StudentCard';
import UpdateStudentForm from './UpdateStudentForm';

export default function App
() {
// creation of state first 

   const[student, setStudent] = useState({
    name: '',
    age: '',
    grade:'',
    school:''
   });
   
  // {id:1, name: 'Chelsea',
  //   age: '20',
  //   grade:'btech',
  //   school:'Uni'
  //  },
  //  {id:2, name: 'Singla',
  //   age: '20',
  //   grade:'btech',
  //   school:'Uni'
  //  },
  // ]);
  
  // const updateStudentDetails = (id, newDetails) => {
  //   setStudent(prevState => prevState.map(student => 
  //     student.id === id ? { ...student, ...newDetails } : student
  //   ));
  // };
  const updateStudentDetails = (newDetails) => {
    setStudent(newDetails);
  };
  return (
    <div>
<h1> student details</h1>
{/* {student.map(student=>(<StudentCard key={student.id} student={student}/>))}
 */}
<StudentCard student={student}/>
<UpdateStudentForm updateStudentDetails={updateStudentDetails}/>

    </div>
  )
}
