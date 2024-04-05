import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const Info_Paises = () => {
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
      <h1 className="mt-5 mb-4">Monedas y Poblacion</h1>
      <input
        type="text"
        placeholder="Buscar por pais"
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-4"
      />
      <div className="row">
        {filteredCountries.map(country => (
          <div key={country.name.common} className="col-lg-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                {country.currencies && Object.values(country.currencies).length > 0 && (
                  <div>
                    <p className="card-text mb-0"><span style={{textDecoration: 'underline'}}>Moneda:  </span>{Object.values(country.currencies)[0].name} -  
                    <span style={{textDecoration: 'underline'}}>Símbolo:</span>{Object.values(country.currencies)[0].symbol}</p>
                    {country.population && (
                      <p> <span style={{textDecoration: 'underline'}}>Poblacion:   </span> {country.population}</p>
                    )}
                  </div>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Info_Paises;
