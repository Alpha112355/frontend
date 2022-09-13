import axios from "axios";

const PAYMENT_REST_API_URL = 'http://localhost:8080/sms/Payment';

class PaymentService{
    getAllPayment(){
        return axios.get(PAYMENT_REST_API_URL );
    }

    createPayment(payment){
        return axios.post(PAYMENT_REST_API_URL , payment)
    }
}
export default new PaymentService();
