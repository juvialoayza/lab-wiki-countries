import logo from './logo.svg';
import axios from "axios"
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react'
import './App.css';
import countries from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';



function App() {
  // const {countryNameList, setCountryNameList} = useState(countries)

  // useEffect(() => {
  //     axios.get("https://ih-countries-api.herokuapp.com/countries")
  //     .then((response) => {
  //         setCountryNameList(response.data.alpha3Code)
  //     }).catch((err)=> {
  //         console.log(err)
  //     })
  // }, [])


  return (
    <div className="App">

      <Navbar/>
      {/* <CountriesList countries={countries} /> */}
      
      {/* <Routes>
        <Route path="/:alpha3code" element={ <CountryDetails/>}/>

      </Routes>  */}
    </div>
  );
}

export default App;
