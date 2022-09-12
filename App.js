//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import GetCourseComponent from './coursecomponent/GetCourseComponent';
import GetPaymentComponent from './paymentcomponent/GetPaymentComponent';
import GetProgressComponent from './progresscomponent/GetProgressComponent';
//import GetCourseComponent from './progresscomponent/GetProgressComponent';
//import ListStudentComponent from './components/student-component/ListStudentComponent';
import GetStudentComponent from './studentcomponent/GetStudentComponent';
import GetTrainerComponent from './trainercomponent/GetTrainerComponent';
import TrainingSchuduleComponent from './trainingschudulecomponent/TrainingSchuduleComponent';
//import ReactLogo from './react.jpg';

function App() {
  return (
    <div className="App">

      
      <Header />
      
      <Menu />
      <Router>
        <Routes>
        <Route exact path='/getStudent' element ={<GetStudentComponent />}/>
        <Route exact path='/getCourse' element ={<GetCourseComponent />}/>
        <Route exact path='/getPayment' element ={<GetPaymentComponent />}/>
        <Route exact path='/getProgress' element ={<GetProgressComponent />}/>
        <Route exact path='/getTrainer' element ={<GetTrainerComponent />}/>
        <Route exact path='/getTrainingSchudule' element ={<TrainingSchuduleComponent />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
