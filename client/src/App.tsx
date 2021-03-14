import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home } from './pages/Home';
import { MainContext } from './context/MainContext';
// import { MainLayout } from './components/MainLayout';
import { CountryDetails } from './components/CountryDetails';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import SaveLangState from './utils/saveLangState';
import { Admin } from './pages/Admin';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [langValue, setLangValue] = SaveLangState('langValue', 'en');

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
            langValue={langValue}
          />
          <div className="body">
            <Switch>
              <Route
                path="/allcountries"
                exact
                render={(props) => (
                  <Home {...props} searchValue={searchValue} langValue={langValue} />
                )}
              />
              <Route
                path="/allcountries/:id"
                render={(props) => (
                  <CountryDetails {...props} langValue={langValue} />
                )}
              />
              <Route path="/admin" component={Admin} />
              <Redirect from='/' to='/allcountries'/>
            </Switch>
          </div>
          <Footer
            langValue={langValue}/>
        </div>
      </MainContext>
    </Router>
  );
}

export default App;
