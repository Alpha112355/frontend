import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import TrainingSchuduleService from '../service/TrainingSchuduleService'

const TrainingSchuduleComponent = () => {

    const [trainingSchudules, settrainingSchudules] = useState([])
   
    useEffect(() => {
      TrainingSchuduleService.getAllTrainingSchudule().then((Response) => {
        settrainingSchudules(Response.data)
        console.log(Response.data)
      }).catch(error =>{
        console.log(error);
    })
    }, [])

    const deleteTrainingSchudule=(trainingSchuduleId) => {
      TrainingSchuduleService.deleteTrainingSchudule(trainingSchuduleId).then((Response) => {

      }).catch(error =>{
          console.log(error);
      })
  }
    


  return (
    <div className='container'>
    <br/><br/>
   {/*} <Link to = "/addTrainingSchudule" className="btn btn-primary">Add Training Schudule</Link>*/}
    <br/><br/>
    <h2 className='text-center'>Training Schudule</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>TrainingSchudule Id</th>
                <th>timings</th>
                <th>startDate</th>
                <th>endDate</th>
                <th>course</th>
                <th>trainer</th>
                <th>Action</th>
               
                
            </thead>
            <tbody>
                {
                    trainingSchudules.map(
                        trainingSchudule =>
                        <tr key={trainingSchudule.id}>
                            <td>{trainingSchudule.id}</td>
                            <td>{trainingSchudule.timings}</td>
                            <td>{trainingSchudule.startDate}</td>
                            <td>{trainingSchudule.endDate}</td>
                            <td>{trainingSchudule.course}</td>
                            <td>{trainingSchudule.trainer}</td>
                            
                            <td><Link to = "/addPayment" className="btn btn-primary">buy</Link></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default TrainingSchuduleComponent
