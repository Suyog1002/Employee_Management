import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import DisplayUser from './components/DisplayUser';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UpdateEmployee from './components/UpdateEmployee';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster/> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/display' element={<DisplayUser/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/update/:id' element={<UpdateEmployee/>}/>
      </Routes>
    </Router>
  );
}

export default App;
