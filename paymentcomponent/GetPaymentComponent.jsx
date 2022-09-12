import React,{useState,useEffect} from 'react'
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
    
  return (
    <div className='container'>
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
                            <td>{payment.amountpaid}</td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default GetPaymentComponent