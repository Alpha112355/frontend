import React , {useState,useEffect} from 'react'
import ProgressService from '../service/ProgressService'

const GetProgressComponent = () => {
    const [progresss, setprogresss] = useState([])
    useEffect(() => {
        ProgressService.getAllProgress().then((Response) =>{
            setprogresss(Response.data)
            console.log(Response.data)
           
        }).catch(error =>{
            console.log(error);
        })
      
    }, [])
  return (
    <div className='container'>
    <h2 className='text-center'>Progress</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Progress Id</th>
                <th>Comment</th>
                <th>Scored Marks</th>
                
            </thead>
            <tbody>
                {
                    progresss.map(
                        progress =>
                        <tr key={progress.id}>
                            <td>{progress.id}</td>
                            <td>{progress.comments}</td>
                            <td>{progress.scoredMarks}</td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
       

    </div>
  )
}

export default GetProgressComponent