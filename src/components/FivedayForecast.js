import React from 'react';

const FivedayForecast = (props) => {

  const RenderForecast = props.data.map((item) =>
    <li className="forecast5day" key={parseInt(item.time)*parseFloat(item.temp)}>
      <span>{item.time}</span>
      <span>{item.temp}° F</span>
      <span>
        <img src={`http://openweathermap.org/img/w/${item.icon}.png`} alt=''></img>
      </span>
    </li>
  );

  return(
    <div className="container">
       <div className="forecast-results">
        {RenderForecast}
       </div>
     </div>
   )
}
export default FivedayForecast;
