import React , {useState}from 'react'
import {useNavigate } from 'react-router-dom';
import CourseService from '../service/CourseService';

const AddCourseComponent = () => {
    const [course, setcourse] = useState('')
    
    
    const navigate = useNavigate();

    const saveOrUpdateCourse =(e)=>{
        e.preventDefault();
        const Course ={course}
        
        CourseService.createCourse(Course).then((Response) => {
           // console.log(Response.data)
            navigate('/getCourse');


        }).catch(error =>{
            console.log(error.response.data)
        })
    }
    
  return (
    <div>
    <br /><br />
    <div className='container'>
    <div >
    <div className='card col-md6 offset-md-3 offset-md-3'>
                    <h1>Add Course</h1>
    <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>course :</label>
                <input type={'text'} placeholder="enter course" name='course' className='form-control' value={course} onChange ={(e) => setcourse(e.target.value)} />
            </div>

            

                     
            <button className='btn btn-success' onClick={(e) =>  saveOrUpdateCourse(e)}> Submit</button>

        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
}
  

export default AddCourseComponent