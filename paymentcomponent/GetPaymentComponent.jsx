import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import PaymentService from '../service/PaymentService'


const GetPaymentComponent = () => {
    const [payments, setPayments] = useState([])

    useEffect(() => {
        PaymentService.getAllPayment().then((Response) => {
            setPayments(Response.data)
            console.log(Response.data)
        }).catch(error =>{
            console.log(error);
        })
     
    }, [])

    const deletePayment=(paymentId) => {
        PaymentService.deletePayment(paymentId).then((Response) => {

        }).catch(error =>{
            console.log(error);
        })
    }
    
  return (
    <div className='container'>
    <br /><br />
    <Link to = "/addPayment" className="btn btn-primary">Add Payment</Link>
    <br/><br/>
    <h2 className='text-center'>Payment</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Payment Id</th>
                <th>Decription</th>
                <th>Payment_Date</th>
                <th>Amount_Paid</th>
               
                
            </thead>
            <tbody>
                {
                    payments.map(
                        payment =>
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.decription}</td>
                            <td>{payment.paymentDate}</td>
                            <td>{payment.amountPaid}</td>
                            <td><button className='btn btn-danger' onClick={( ) => deletePayment(payment.id)}>delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default GetPaymentComponent
