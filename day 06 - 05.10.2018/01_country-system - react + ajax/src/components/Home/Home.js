import React, { Component } from 'react';
import { ContryService } from './../../services/country-service';
import CountryInfo from './../CountryInfo/ComponentInfo';
import { Country } from './../../models/country';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countryArray: [],
            selectedCountry: {}
        };

        this.contryService = new ContryService();

        this.contryService.setUrl("ALL");
        this.contryService.getCountry().then(
            (res) => {
                this.setState({
                    countryArray: res,
                    selectedCountry: res[0].name
                })
            }
        )

    }

    countrySelectionHandler = () => {

        this.contryService.setUrl("SINGLE_COUNTRY", this.refs.countryName.value);
        this.contryService.getCountry().then(
            (res) => {

                let countryResult = new Country();
                Object.assign(countryResult, res[0]);

                this.setState({
                    selectedCountry: countryResult
                })
            });

    }


    render() {
        return (
            <div className="App">

                <div>
                    <select ref="countryName" onChange={this.countrySelectionHandler}>
                        {
                            this.state.countryArray.map((elemnt, index) => (
                                <option value={elemnt.name} key={index}  >
                                    {elemnt.name}
                                </option>
                            ))
                        }
                    </select>
                    <CountryInfo country={this.state.selectedCountry} />

                </div>
            </div>
        );
    }
}

export default Home;
