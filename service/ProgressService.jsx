import axios from "axios";

const PROGRESS_REST_API_URL = 'http://localhost:8080/sms/Progress';

class ProgressService{
    getAllProgress(){
        return axios.get(PROGRESS_REST_API_URL );
    }
}
export default new ProgressService();