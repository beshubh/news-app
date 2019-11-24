import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {Switch,Route}from 'react-router-dom';
import NewsList from "./components/NewsList/NewsList";
function App() {
  return (

          <div className="App">
            <Layout/>
            <Switch>
                {/*<Route path='/in' component={NewsList}/>*/}
                <Route path='/sports' component={NewsList}/>
                <Route path='/technology' component={NewsList}/>
                <Route path='/' component={NewsList}/>
            </Switch>
        </div>

  );
}

export default App;
