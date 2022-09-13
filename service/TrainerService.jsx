import axios from "axios";

const TRAINER_REST_API_URL = 'http://localhost:8080/sms/Trainer';

class TrainerService{
    getAllTrainer(){
        return axios.get(TRAINER_REST_API_URL)
    }

    createTrainer(trainer){
        return axios.post(TRAINER_REST_API_URL , trainer)
    }
}

export default new TrainerService();
