import React,{useState,useEffect} from 'react'
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
    

    return (
        <div className='container'>
        <h2 className='text-center'>Trainer</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Trainer Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    
                   
                    
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
                                
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
    
        </div>
      )

  
}

export default GetTrainerComponent