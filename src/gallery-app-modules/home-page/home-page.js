import React from 'react';
import { Link } from "react-router-dom";

class HomePage extends React.Component {

 render(){
  return (
  	<Link to="/gallery">Users</Link>
  );
 }
}

export default HomePage;