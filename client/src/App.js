import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Log from './pages/Log';
import Reg from './pages/Reg';
import Makeform from './pages/Makeform';
import Userview from './pages/Userview';
import Userhom from './pages/Userhom';
import Viewp from './pages/Viewp';
import Joinform from './pages/Joinform';
import Package from './pages/Package';
import Admin from './pages/Admin';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Log/>}/>
    <Route path='/reg' element={<Reg/>}/>
    <Route path='/make' element={<Makeform/>}/>
    <Route path='/view users' element={<Userview/>}/> 
    <Route path='/user' element={<Userhom/>}/> 
    <Route path='/viewpost' element={<Viewp/>}/> 
    <Route path='/join' element={<Joinform/>}/> 
    <Route path='/Package' element={<Package/>}/> 
    <Route path='/admin' element={<Admin/>}/> 

    </Routes> 
    </BrowserRouter>
  );
}

export default App;
