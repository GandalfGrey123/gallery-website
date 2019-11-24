import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from 'gallery-app-modules/home-page';
import GalleryPage from 'gallery-app-modules/gallery-page';

const HOMEPAGE_ROUTE = "/";
const ERROR_PATH = "ERROR_PATH";
const MAX_HISTORY_SIZE = 25;

//mutate given history array
const pushToBoundHistoryArrary = (historyArray, newRoute, maxSize) => {
  historyArray.push(newRoute);
  historyArray.length === maxSize+1? historyArray.shift(): historyArray
}

class AppRouter extends React.Component {
 constructor(props){
  super(props);
  this.state = {
   routeHistory:[HOMEPAGE_ROUTE]
  }
 }

 componentDidUpdate(prevProps) {
  const { location } = this.props;
  console.log(this.state.routeHistory)
   if (location !== prevProps.location) {
    this.onRouteChanged(location);
   }
  }

  onRouteChanged(location) {
    let { routeHistory } = this.state;
    pushToBoundHistoryArrary(routeHistory, location.pathname, MAX_HISTORY_SIZE);
    this.setState({
      routeHistory
    });
  }


 render(){
  return (
  	<Switch>  	    
      <Route path={'/gallery'} component={GalleryPage}/>
      <Route path={'/'} component={HomePage}/>        
  	</Switch>
  );
 }
}

export default withRouter(AppRouter);