import React , {useState}from 'react'
import {useNavigate } from 'react-router-dom';
import ProgressService from '../service/ProgressService';
const AddProgressComponent = () => {
  
    const [comments, setcomments] = useState('')
    const [scoredMarks, setscoredMarks] = useState('')
    
    const navigate = useNavigate();

    const saveOrUpdateProgress =(e)=>{
        e.preventDefault();
        const progress ={comments,scoredMarks}
        
        ProgressService.createProgress(progress).then((Response) => {
           // console.log(Response.data)
            navigate('/getProgress');


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
                    <h1>Add Progress</h1>
    <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>comments :</label>
                <input type={'text'} placeholder="enter comments" name='comments' className='form-control' value={comments} onChange ={(e) => setcomments(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Scored Marks :</label>
                <input type={'text'} placeholder="enter Marks scored" name='scoredMarks' className='form-control' value={scoredMarks} onChange ={(e) => setscoredMarks(e.target.value)} />
            </div>

                     
            <button className='btn btn-success' onClick={(e) =>  saveOrUpdateProgress(e)}> Submit</button>

        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
    
 
}

export default AddProgressComponent