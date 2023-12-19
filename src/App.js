import './App.css';
import Logo from './assets/Logo.svg'
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import OnlineMenu from './components/OnlineMenu';
import Reservation from './components/Reservation';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Link to='/'><img src={Logo} alt='Logo'/></Link>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/online-menu' element={<OnlineMenu/>}/>
        <Route path='/booking-table' element={<Reservation/>}/>
      </Routes>
    </>
  );
}

export default App;
