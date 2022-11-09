import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';



function App() {


  return (
    <div className="App">

      <Navbar/>
      <CountriesList />
      
      <Routes>
        <Route path="/countries/:alpha3code" element={ <CountryDetails/>}/>

      </Routes> 
    </div>
  );
}

export default App;
