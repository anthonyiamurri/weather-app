import React from 'react';
import Header from './Header';
import Form from './Form';
import FivedayForecast from './FivedayForecast';

const Api_Key = "eea46d93ed64ee3d01cbdc96313d81de";

class Fiveday extends React.Component{
  state = {
    forecast: [],
    error: undefined
  }

  getForecast = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&APPID=${Api_Key}`);
    const response = await api_call.json()
    this.setState({
      forecast: []
    })
    let forecastList = [];
    for (let i = 0; i < response.cnt; i++) {
      let forecastObject = {};
      let t = new Date(response.list[i].dt * 1000);
      let formatted = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);
      forecastObject.time = formatted;
      forecastObject.temp = Math.round(response.list[i].main.temp);
      forecastObject.icon = response.list[i].weather[0].icon;
      forecastList.push(forecastObject);
    }

    if(city && country){
    this.setState({
      forecast: forecastList,
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
      <FivedayForecast
        data={this.state.forecast}/>
    </React.Fragment>
   )
  }
}

export default Fiveday;
