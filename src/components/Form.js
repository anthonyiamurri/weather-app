import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class Form extends React.Component{
  render() {
    return (
      <div>
        <form className="input-form" onSubmit = {this.props.loadWeather}>
          <input type="text" name="city" placeholder="City..."/>
          <input type="text" name="country" placeholder="Country..."/>
          <Button type="submit" bsStyle="primary">Show Forecast</Button>
        </form>
      </div>
    )
  }
}
export default Form;
