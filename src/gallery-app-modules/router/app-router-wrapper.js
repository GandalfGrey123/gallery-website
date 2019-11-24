import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "gallery-app-modules/router";

class AppRouterWrapper extends React.Component {
 render(){
  return (
   <BrowserRouter>
  	<AppRouter />
   </BrowserRouter>
  )
 }
}

export default(AppRouterWrapper);