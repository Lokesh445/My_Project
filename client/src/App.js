import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login'
import SignupPage from './components/signup'
import { Portnav } from './components/landingpage/port'
import { Dashboard } from './components/landingpage/dashboard'
import Engcollege from './components/college/engcollege'
import EngCollegeDetails from './components/college/engcollegeDet'
import Artscollege from './components/college/artscollege'
import ArtsCollegeDetails from './components/college/artscollegeDet'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<LoginForm />]}></Route>
        <Route path='/signup' element={[<SignupPage />]}></Route>
        <Route path='/portnav' element={[<Portnav />]}></Route>
        <Route path='/dashboard' element={[<Portnav />, <Dashboard />]}></Route>
        <Route path='/engcollege' element={[<Portnav />, <Engcollege />]}></Route>
        <Route path='/artscollege' element={[<Portnav />, <Artscollege />]}></Route>
        <Route path='/EngCollegeDetails/:id' element={[<Portnav />, <EngCollegeDetails />]}></Route>
        <Route path='/ArtsCollegeDetails/:id' element={[<Portnav />, <ArtsCollegeDetails />]}></Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
