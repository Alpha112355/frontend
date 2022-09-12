import React,{useState , useEffect} from 'react'
import StudentService from '../service/StudentService'

const GetStudentComponent = () => {
    const [students, setstudents] = useState([])
    useEffect(() => {
        StudentService.getAllStudent().then((Response) =>{
            setstudents(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
      
    }, [])
    
  return (
    <div className='container'>
        <h2 className='text-center'>List of Students</h2>
        <table className='table table-bordered table-stripeddark'>
            <thead>
                <th>Student Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>mobile</th>
                <th>email</th>
                {/* <th>Progress Id</th>
                <th>Payment Id</th>
                <th>Schudule Id</th> */}
            </thead>
            <tbody>
                {
                    students.map(
                        student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.mobile}</td>
                            <td>{student.email}</td>
                            
                            {/* <td>{student.progressId}</td>
                            <td>{student.paymentId}</td>
                            <td>{student.schudle}</td> */}
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default GetStudentComponent