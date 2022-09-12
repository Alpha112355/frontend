import React , {useState,useEffect}from 'react'
import CourseService from '../service/CourseService'

const GetCourseComponent = () => {
    const [courses, setcourses] = useState([])
    useEffect(() => {
        CourseService.getAllCourse().then((Response) => {
            setcourses(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
      
    }, [])
    

  return (
    <div className='container'>
    <h2 className='text-center'>Course</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Course Id</th>
                <th>Course</th>
               
                
            </thead>
            <tbody>
                {
                    courses.map(
                        course =>
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.course}</td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default GetCourseComponent