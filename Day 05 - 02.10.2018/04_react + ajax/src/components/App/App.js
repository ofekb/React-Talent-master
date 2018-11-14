import React, { Component } from 'react';
import './App.css';

import CountryDropDown from './../CountryDropDown/CountryDropDown';
import CountryFlag from './../CountryFlag/CountryFlag';
import CountryName from './../CountryName/CountryName';


class App extends Component {

  state = {
    countryArray: [],
    selectedCountry: undefined
  };

  constructor(p) {
    super(p);

    fetch("https://restcountries.eu/rest/v2/all?fields=name;flag")
      .then(res => res.json())
      .then(bodyRes => this.setState({ countryArray: bodyRes }));
  }

  countrySelectionHandler=(countryName)=> {
    this.setState(
      { 
        selectedCountry: this.state.countryArray.find(e=>e.name===countryName) 
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Country - Info</h1>
        </header>

        <CountryDropDown
          countryArray={this.state.countryArray}
          countrySelectionHandler={this.countrySelectionHandler} />

        <hr />

        {
          this.state.selectedCountry ?
            <div>
              <CountryName countryName={this.state.selectedCountry.name} />
              <CountryFlag countryFlag={this.state.selectedCountry.flag} />
            </div>
            :
            <div> no country selected</div>
        }


      </div>
    );
  }
}

export default App;
