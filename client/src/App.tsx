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

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [langValue, setLangValue] = useState('en');

  const handleSearchValueToHomePage = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const handleLangValueToHomePage = (langValue: string) => {
    setLangValue(langValue);
  };

  return (
    <Router>
      <MainContext>
        <div className="App">
          <Header
            handleSearchValue={handleSearchValueToHomePage}
            handleLangValue={handleLangValueToHomePage}
            />
            <Switch>
              <Route
                path="/allcountries"
                exact
                render={(props) => (
                  <Home {...props} searchValue={searchValue} langValue={langValue}/>
                )}
              />
              <Route path="/allcountries/:country" component={CountryDetails} />
              <Redirect from='/' to='/allcountries'/>
            </Switch>
          <Footer />
        </div>
      </MainContext>
    </Router>
  );
}

export default App;
