import axios from "axios"
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function CountriesList() {

  const [countryNameList, setCountryNameList] = useState([])
  const { alpha3Code } = useParams

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountryNameList(response.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [alpha3Code])


  return (
    < div className="container" >
      <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
            {countryNameList.map((eachCountry) => {
              return (
                <div key={eachCountry._id}>
                  <Link to={`/countries/${eachCountry.alpha3code}`}
                    className="list-group-item list-group-item-action">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="country-flag"/>
                    <h6>{eachCountry.name.common}</h6>
                  </Link>
                </div >
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


export default CountriesList