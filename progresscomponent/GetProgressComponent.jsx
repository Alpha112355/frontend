import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
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

    const deleteProgress =(progressId) => {
        ProgressService.deleteProgress(progressId).then((Response) => {

        }).catch(error =>{
            console.log(error);
        })

    }
  return (
    <div className='container'>
    <br /><br />
    <Link to = "/addProgress" className="btn btn-primary">Add Student</Link>
    <br/><br/>
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
                            <td>
                            <button className='btn btn-danger' onClick={( ) => deleteProgress(progress.id)}>delete</button>
                            </td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
       

    </div>
  )
}

export default GetProgressComponent
