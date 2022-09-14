import axios from "axios";

const PROGRESS_REST_API_URL = 'http://localhost:8080/sms/Progress';

class ProgressService{
    getAllProgress(){
        return axios.get(PROGRESS_REST_API_URL );
    }

    createProgress(progress){
        return axios.post(PROGRESS_REST_API_URL , progress)
    }
    deleteProgress(progressId){

        return axios.delete(PROGRESS_REST_API_URL +'/' + progressId)
    }
}
export default new ProgressService();
