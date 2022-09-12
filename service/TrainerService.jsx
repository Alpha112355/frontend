import axios from "axios";

const TRAINER_REST_API_URL = 'http://localhost:8080/sms/Trainer';

class TrainerService{
    getAllTrainer(){
        return axios.get(TRAINER_REST_API_URL)
    }
}

export default new TrainerService();