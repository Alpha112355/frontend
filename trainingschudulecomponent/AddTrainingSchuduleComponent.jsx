import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
import TrainingSchuduleService from '../service/TrainingSchuduleService'

const AddTrainingSchuduleComponent = () => {
    const [timings, settimings] = useState('')
    const [startDate, setstartDate] = useState('')
    const [endDate, setendDate] = useState('')
    // const [course, setcourse] = useState('')
    // const [trainer, setTrainer] = useState('')
    const navigate = useNavigate();

    const saveOrUpdateTrainingSchudule=(e)=>{
        e.preventDefault();
        const trainingSchudule ={timings,startDate,endDate}
        
        TrainingSchuduleService.createTrainingSchudule(trainingSchudule).then((Response) => {
           // console.log(Response.data)
            navigate('/getTrainingSchudule');


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
                    <h1>Add Training Schudule</h1>
    <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>Timings :</label>
                <input type={'text'} placeholder="enter timings" name='timings' className='form-control' value={timings} onChange ={(e) => settimings(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Start Date :</label>
                <input type={'date'} placeholder="enter startDate" name='startDate' className='form-control' value={startDate} onChange ={(e) => setstartDate(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>End Date :</label>
                <input type={'date'} placeholder="enter endDate" name='endDate' className='form-control' value={endDate} onChange ={(e) => setendDate(e.target.value)} />
            </div>

            {/* <div className='form-group mb-2'>
                <label className='form-label'>course:</label>
                <input type={'email'} placeholder="enter course" name='course' className='form-control' value={course} onChange ={(e) => setcourse(e.target.value)} />
            </div>  

            <div className='form-group mb-2'>
                <label className='form-label'>trainer:</label>
                <input type={'email'} placeholder="enter trainer" name='trainer' className='form-control' value={trainer} onChange ={(e) => setTrainer(e.target.value)} />
            </div>   */}

            <button className='btn btn-success' onClick={(e) =>  saveOrUpdateTrainingSchudule(e)}> Submit</button>

        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
}

export default AddTrainingSchuduleComponent