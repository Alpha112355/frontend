import axios from 'axios'
const STUDENT_REST_API_URL = ' http://localhost:8080/sms/student';
class StudentService{
    getAllStudent(){
        return axios.get(STUDENT_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENT_REST_API_URL , student)
    }
}
export default new StudentService();
