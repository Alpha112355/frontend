import React,{useState,useEffect} from 'react'
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
    


  return (
    <div className='container'>
    <h2 className='text-center'>Training Schudule</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>TrainingSchudule Id</th>
                <th>timings</th>
                <th>startDate</th>
                <th>endDate</th>
                <th>course</th>
                <th>trainer</th>
               
                
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
                            <td>{trainingSchudule.course}</td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default TrainingSchuduleComponent