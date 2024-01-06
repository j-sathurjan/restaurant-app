import './App.css';
import Logo from './assets/Logo.svg'
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import OnlineMenu from './components/OnlineMenu';
import Reservation from './components/Reservation';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className='header-section'>
        <Link to='/'><img src={Logo} alt='Logo'/></Link>
      </header>
      <nav className='nav-bar'>
        <Navigation/>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/online-menu' element={<OnlineMenu/>}/>
        <Route path='/booking-table' element={<Reservation/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
