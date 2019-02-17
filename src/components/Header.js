import React from 'react';
import '../App.css';
import { PageHeader } from 'react-bootstrap';

const Header = (props) =>{
  return (
    <div className="main-head">
      <PageHeader>
        Enter a location:
      </PageHeader>
    </div>
  )
}
export default Header;
