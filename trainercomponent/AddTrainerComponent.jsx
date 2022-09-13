import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
import TrainerService from '../service/TrainerService'

const AddTrainerComponent = () => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const navigate = useNavigate();

    const saveOrUpdateTrainer =(e)=>{
        e.preventDefault();
        const trainer ={firstName,lastName,mobile,email}
        
        TrainerService.createTrainer(trainer).then((Response) => {
           // console.log(Response.data)
            navigate('/getTrainer');


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
                    <h1>Add Trainer</h1>
    <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>FirstName :</label>
                <input type={'text'} placeholder="enter firstname" name='firstname' className='form-control' value={firstName} onChange ={(e) => setFirstname(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>LastName :</label>
                <input type={'text'} placeholder="enter lastname" name='lastname' className='form-control' value={lastName} onChange ={(e) => setLastname(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>mobile :</label>
                <input type={'number'} placeholder="enter mobile number" name='mobile' className='form-control' value={mobile} onChange ={(e) => setMobile(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>email_id :</label>
                <input type={'email'} placeholder="enter Email_id" name='email_id' className='form-control' value={email} onChange ={(e) => setEmail(e.target.value)} />
            </div>          
            <button className='btn btn-success' onClick={(e) =>  saveOrUpdateTrainer(e)}> Submit</button>

        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
}

export default AddTrainerComponent