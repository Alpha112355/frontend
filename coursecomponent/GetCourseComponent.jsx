import React , {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
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
    
    const deleteCourse=(courseId) => {
        CourseService.deleteCourse(courseId).then((Response) => {

        }).catch(error =>{
            console.log(error);
        })
    }

  return (
    <div className='container'>
    <br /><br />
    <Link to = "/addCourse" className="btn btn-primary">Add Course</Link>
    <br/><br/>
    <h2 className='text-center'>Course</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Course Id</th>
                <th>Course</th>
                <th>Action</th>
               
                
            </thead>
            <tbody>
                {
                    courses.map(
                        course =>
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.course}</td>
                            <td><button className='btn btn-danger' onClick={( ) => deleteCourse(course.id)}>delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default GetCourseComponent
