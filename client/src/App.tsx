import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home } from './pages/Home';
import { MainContext } from './context/MainContext';
import { MainLayout } from './components/MainLayout';

const App: React.FC = () => {
  return (
    <Router>
      <MainContext>
        <div className="App">
          <MainLayout>
            <Switch>
              <Route path="/allcountries" component={Home} />
              <Route path="/login" />
              <Redirect from='/' to='/allcountries'/>
            </Switch>
          </MainLayout>
        </div>
      </MainContext>
    </Router>
  );
}

export default App;
