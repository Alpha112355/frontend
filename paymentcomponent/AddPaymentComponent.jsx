import React , {useState}from 'react'
import {useNavigate } from 'react-router-dom';
import PaymentService from '../service/PaymentService';

const AddPaymentComponent = () => {
    const [decription, setdecription] = useState('')
    const [paymentDate, setpaymentDate] = useState('')
    const [amountPaid, setamountPaid] = useState('')
    
    const navigate = useNavigate();

    const saveOrUpdatePayment =(e)=>{
        e.preventDefault();
        const payment ={decription,paymentDate,amountPaid}
        
        PaymentService.createPayment(payment).then((Response) => {
           // console.log(Response.data)
            navigate('/getPayment');


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
                <label className='form-label'>decription :</label>
                <input type={'text'} placeholder="enter decription" name='decription' className='form-control' value={decription} onChange ={(e) => setdecription(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>paymentDate:</label>
                <input type={'date'} placeholder="enter paymentDate" name='paymentDate' className='form-control' value={paymentDate} onChange ={(e) => setpaymentDate(e.target.value)} />
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>amountpaid:</label>
                <input type={'text'} placeholder="enter amountpaid" name='amountPaid' className='form-control' value={amountPaid} onChange ={(e) => setamountPaid(e.target.value)} />
            </div>

                     
            <button className='btn btn-success' onClick={(e) =>  saveOrUpdatePayment(e)}> Submit</button>

        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
}

export default AddPaymentComponent