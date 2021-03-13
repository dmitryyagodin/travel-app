import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // useLocation
} from "react-router-dom";
import { Home } from './pages/Home';
import { MainContext } from './context/MainContext';
import { MainLayout } from './components/MainLayout';
import { CountryDetails } from './components/CountryDetails';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Admin } from './pages/Admin';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueToHomePage = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <Router>
      <MainContext>
        <div className="App">
          <Header handleSearchValue={handleSearchValueToHomePage} />
          <div className="body">
            <Switch>
              <Route
                path="/allcountries"
                exact
                render={(props) => (
                  <Home {...props} searchValue={searchValue} />
                )}
              />
              <Route path="/allcountries/:country" component={CountryDetails} />
              {/* <Redirect from='/' to='/allcountries'/> */}
              <Route path="/admin" component={Admin} />
            </Switch>
          </div>
          <Footer />
        </div>
      </MainContext>
    </Router>
  );
}

export default App;
