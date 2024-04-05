import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Paises = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filteredCountries);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Países</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-4"
      />
      <div className="row">
        {filteredCountries.map(country => (
          <div key={country.name.common} className="col-lg-4 mb-3">
            <div className="card">
              <img src={country.flags.png} className="card-img-top" alt={`${country.name.common} Flag`} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Paises;
