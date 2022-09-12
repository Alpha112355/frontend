import axios from "axios";

const PAYMENT_REST_API_URL = 'http://localhost:8080/sms/Payment';

class PaymentService{
    getAllPayment(){
        return axios.get(PAYMENT_REST_API_URL );
    }
}
export default new PaymentService();