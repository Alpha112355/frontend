//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import UserMenu from './components/UserMenu';
import GetCourseComponent from './coursecomponent/GetCourseComponent';
import GetPaymentComponent from './paymentcomponent/GetPaymentComponent';
import GetProgressComponent from './progresscomponent/GetProgressComponent';
//import GetCourseComponent from './progresscomponent/GetProgressComponent';
//import ListStudentComponent from './components/student-component/ListStudentComponent';
import GetStudentComponent from './studentcomponent/GetStudentComponent';
import GetTrainerComponent from './trainercomponent/GetTrainerComponent';
import TrainingSchuduleComponent from './trainingschudulecomponent/TrainingSchuduleComponent';
import AddStudentComponent from './studentcomponent/AddStudentComponent';
import AddProgressComponent from './progresscomponent/AddProgressComponent';
import AddCourseComponent from './coursecomponent/AddCourseComponent';
import AddPaymentComponent from './paymentcomponent/AddPaymentComponent';
import AddTrainerComponent from './trainercomponent/AddTrainerComponent';
import AddTrainingSchuduleComponent from './trainingschudulecomponent/AddTrainingSchuduleComponent';
//import ReactLogo from './react.jpg';

function App() {
  return (
    <div className="App">

      
      <Header />
      
      <UserMenu />
      <Router>
        <Routes>
        <Route exact path='/getStudent' element ={<GetStudentComponent />}/>
        <Route exact path='/addstudent' element ={<AddStudentComponent />}/>

        <Route exact path='/getCourse' element ={<GetCourseComponent />}/>
        <Route exact path='/addCourse' element ={<AddCourseComponent />}/>

        <Route exact path='/getPayment' element ={<GetPaymentComponent />}/>
        <Route exact path='/addPayment' element ={<AddPaymentComponent />}/>

        <Route exact path='/getProgress' element ={<GetProgressComponent />}/>
        <Route exact path='/addProgress' element ={<AddProgressComponent />}/>

        <Route exact path='/getTrainer' element ={<GetTrainerComponent />}/>
        <Route exact path='/addTrainer' element ={<AddTrainerComponent />}/>

        <Route exact path='/getTrainingSchudule' element ={<TrainingSchuduleComponent />}/>
        <Route exact path='/addTrainingSchudule' element ={<AddTrainingSchuduleComponent />}/>


        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
