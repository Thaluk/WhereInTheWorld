import React, { useEffect, useState } from "react";
import CountryList from "./components/countryList";
import './App.css'
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import ActionList from "./actions-list"
import Header from "./components/header";
import CountryPage from "./components/country-page"
import {
  BrowserRouter as Router, Route, Switch

} from 'react-router-dom'

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: '',
};



const store = createStore(reducer, initialState);

function App() {
  
  const [darkMode, setDarkMode] = useState(true);

  const [checked, setChecked] = useState(false);
  const mainclass = darkMode ? 'is-dark-mode' : 'is-light-mode';
  
  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }
  
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  

  return (
    <main className={mainclass}>
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Switch>
            <Route path='/country/:id' render={(props) => <CountryPage {...props} darkMode={darkMode} /> } />
            <Route  path='/'>
              <ActionList/>
              <CountryList/>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
