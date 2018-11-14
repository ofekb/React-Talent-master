import countryInfo from "../components/CountryInfo/ComponentInfo";

export class ContryService {

    setUrl(actionType, param) {
        switch (actionType) {
            case "ALL":
                this.url = `https://restcountries.eu/rest/v2/all?fields=name`;
                break;

            case "SINGLE_COUNTRY":
                this.url = `https://restcountries.eu/rest/v2/name/${param}?fullText=true&fields=borders;alpha3Code;flag;name`;
                break;
        }

        this.getCountry
    }

    async getCountry() {
        try {
            let response = await fetch(this.url);
            let body = await response.json();
            return body;
        }
        catch (e) {
            console.log(e);
        }
    }
}

