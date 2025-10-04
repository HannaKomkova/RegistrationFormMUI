import AppStyle from './App.modules.css';
import Login from './pages/Login/Login.js'
import Registration from './pages/Registration/Registration.js';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
    </Routes>
  );
}

export default App;
