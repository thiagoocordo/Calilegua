import React, { useState } from 'react';
import axios from 'axios';

const Ubicacion = () => {
  const [country, setCountry] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
      const data = response.data[0];
      const latlng = data.latlng;
      setLatitude(latlng[0]);
      setLongitude(latlng[1]);
    } catch (error) {
      console.error('Error fetching country:', error);
    }
  };

  return (
    <div className="container mt-3">
      <h1 className="mb-4">Ubicación en Mapa</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese un país"
          value={country}
          onChange={handleCountryChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {latitude && longitude && (
            <iframe
              title="Map"
              width="100%"
              height="350"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 5},${latitude - 5},${longitude + 5},${latitude + 5}&amp;layer=mapnik`}
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Ubicacion;
