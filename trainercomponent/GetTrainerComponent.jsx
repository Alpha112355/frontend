import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import TrainerService from '../service/TrainerService'

const GetTrainerComponent = () => {
    const [trainers, settrainers] = useState([])

    useEffect(() => {
        TrainerService.getAllTrainer().then((Response) => {
            settrainers(Response.data)
            console.log(Response.data)
        }).catch(error =>{
            console.log(error);
        })
     
    }, [])

    const deleteTrainer=(trainerId) => {
        TrainerService.deleteTrainer(trainerId).then((Response) => {

        }).catch(error =>{
            console.log(error);
        })
    }
    


    return (
        <div className='container'>
        <br /><br />
    <Link to = "/addTrainer" className="btn btn-primary">Add Trainer</Link>
    <br/><br/>
        <h2 className='text-center'>Trainer</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Trainer Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                    
                   
                    
                </thead>
                <tbody>
                    {
                        trainers.map(
                            trainer =>
                            <tr key={trainer.id}>
                                <td>{trainer.id}</td>
                                <td>{trainer.firstName}</td>
                                <td>{trainer.lastName}</td>
                                <td>{trainer.email}</td>
                                <td>{trainer.mobile}</td>
                                <td><button className='btn btn-danger' onClick={( ) => deleteTrainer(trainer.id)}>delete</button></td>
                                
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
    
        </div>
      )

  
}

export default GetTrainerComponent
