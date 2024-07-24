function getStudentByRollNumber(roll_number){
    for(let index = 0; index < studentData.length; index++){
        if(studentData[index].roll_number == roll_number){
            return studentData[index];
        }
    }
    return null;

}
function getStudentWithHighestGrade(){
    var result =[]
    var max = studentData[0]
    for(let index =1; index< studentData.length ; index++){
        if(studentData[index].grade > max.grade){
            max = studentData[index]
            result.splice(0, result.length);
        }
        if(studentData[index].grade == max.grade){
            result.push(studentData[index])
        }
    
    }
    return result
}

console.log(getStudentWithHighestGrade());