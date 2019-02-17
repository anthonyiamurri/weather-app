import React from 'react';

const Forecast = (props) => {
  return(
    <div className="container">
       <div className="forecast-results">
        {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
        {props.temperature && <p>Current Temperature: {props.temperature} °F</p>}
        {props.error && <p>{props.error}</p>}
       </div>
     </div>
   )
}
export default Forecast;
