import React from 'react'

export default function StudentCard
({student}) {
  return (
    <div>
        <h2>{student.name}</h2>
        <h2>{student.age}</h2>
        <h2>{student.grade}</h2>
        <h2>{student.school}</h2>
        <p> </p>
    </div>
  )
}
