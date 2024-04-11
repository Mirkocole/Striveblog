import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './views/Homepage/Homepage';
import MainNavbar from './component/MainNavbar/MainNavbar';

function App() {
  return (
   
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />

        </Routes>

      </BrowserRouter>
   
  );
}

export default App;
