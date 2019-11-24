import React from 'react';
import ReactDOM from "react-dom";
import AppRouterWrapper from "gallery-app-modules/router";

class App extends React.Component {
 render(){
  return ( <AppRouterWrapper /> );
 }
}

ReactDOM.render(<App/>, document.getElementById('react-entry'));