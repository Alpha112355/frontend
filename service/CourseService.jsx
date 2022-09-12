import axios from "axios";
const COURSE_REST_API_URL  ='http://localhost:8080/sms/Course';

class CourseService{
    getAllCourse(){
        return axios.get(COURSE_REST_API_URL );
    }
}
export default new CourseService();