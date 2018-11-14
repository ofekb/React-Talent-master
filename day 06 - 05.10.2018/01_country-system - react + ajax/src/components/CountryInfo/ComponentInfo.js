import React from 'react';

const countryInfo = (props) => {
    return (
        <div>
            <h1>{props.country.name}</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <td>flag</td>
                        <td><img src={props.country.flag} /></td>
                    </tr>
                    <tr>
                        <td>alpha3Code</td>
                        <td>{props.country.alpha3Code}</td>
                    </tr>
                    <tr>
                        <td>borders</td>
                        <td>{props.country.getFormatBorders?props.country.getFormatBorders():""}</td>
                    </tr>
                </tbody>
            </table>

    
        </div>

    )
}
export default countryInfo;
