import axios from "axios";

const TRAININGSCHUDULE_REST_API_URL = 'http://localhost:8080/sms/TrainingSchudle';

class TrainingSchuduleService{
    getAllTrainingSchudule(){
        return axios.get(TRAININGSCHUDULE_REST_API_URL );
    }
}

export default new TrainingSchuduleService();