import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home } from './pages/Home';
import { MainContext } from './context/MainContext';
import { MainLayout } from './components/MainLayout';
import { CountryDetails } from './components/CountryDetails';

const App: React.FC = () => {

  return (
    <Router>
      <MainContext>
        <div className="App">
          <MainLayout>
            <Switch>
              <Route path="/allcountries" exact component={Home} />
              <Route path="/allcountries/:country" component={CountryDetails} />
              <Redirect from='/' to='/allcountries'/>
            </Switch>
          </MainLayout>
        </div>
      </MainContext>
    </Router>
  );
}

export default App;
