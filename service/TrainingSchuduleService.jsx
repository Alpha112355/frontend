import axios from "axios";

const TRAININGSCHUDULE_REST_API_URL = 'http://localhost:8080/sms/TrainingSchudle';

//const COURSE_REST_API_URL  ='http://localhost:8080/sms/Course';


class TrainingSchuduleService{
    getAllTrainingSchudule(){
        return axios.get(TRAININGSCHUDULE_REST_API_URL );
    }

    createTrainingSchudule(trainingSchudule){
        return axios.post(TRAININGSCHUDULE_REST_API_URL , trainingSchudule)
    }
}

export default new TrainingSchuduleService();
