import React from 'react';
import Header from './Header';
import Form from './Form';
import Forecast from './Forecast';

const Api_Key = "eea46d93ed64ee3d01cbdc96313d81de";

class Temperature extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }

  getForecast = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`);
    const response = await api_call.json()
    console.log(response);
    if(city && country){
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      error: ""
    })
  }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }

   render(){
    return(
    <React.Fragment>
    <Header />
      <Form loadWeather={this.getForecast} />
      <Forecast
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        error={this.state.error} />
    </React.Fragment>
   )
  }
}

export default Temperature;
