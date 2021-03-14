import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home } from './pages/Home';
import { MainContext } from './context/MainContext';
<<<<<<< Updated upstream
import { MainLayout } from './components/MainLayout';
=======
// import { MainLayout } from './components/MainLayout';
import { CountryDetails } from './components/CountryDetails';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import SaveLangState from './utils/saveLangState';
import { Admin } from './pages/Admin';
import { Profile } from './pages/Profile';
>>>>>>> Stashed changes

const App: React.FC = () => {
  return (
    <Router>
      <MainContext>
        <div className="App">
<<<<<<< Updated upstream
          <MainLayout>
            <Switch>
              <Route path="/allcountries" component={Home} />
              <Redirect from='/' to='/allcountries'/>
            </Switch>
          </MainLayout>
=======
          <Header
            handleSearchValue={handleSearchValueToHomePage}
            handleLangValue={handleLangValueToHomePage}
            langValue={langValue}
            />
          {/* <Header handleSearchValue={handleSearchValueToHomePage} /> */}
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
              <Route path="/allcountries/:country" component={CountryDetails} />
              {/* <Redirect from='/' to='/allcountries'/> */}
              <Route path="/admin" component={Admin} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
          <Footer 
            langValue={langValue}/>
>>>>>>> Stashed changes
        </div>
      </MainContext>
    </Router>
  );
}

export default App;
