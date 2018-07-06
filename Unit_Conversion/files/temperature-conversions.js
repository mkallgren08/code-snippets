// These are various functions for converting one unit of 
// temperature (either K, C, or F) into another of the three types

function kelvinToCelsius (kelvin) {
    let celsius;
    if (typeof kelvin !== 'float'){
        celsius = parseFloat(kelvin) 
    } else {
        celsius = kelvin
    }

    if (celsius !== NaN){
        celsius = celsius.toFixed(2) + 273.15
        return celsius;
    } else {
        let err = "Input was not a number "
        return err;
    }
    
}

function kelvinToFarenheit (kelvin) {
    let celsius;
    if (typeof kelvin !== 'float'){
        celsius = parseFloat(kelvin)
    } else {
        celsius = kelvin
    }

    if (celsius !== NaN){
        let farenheit = (celsius.toFixed(2) + 273.15)*1.8 + 32;
        return farenheit;
    } else {
        let err = "Input was not a number "
        return err;
    }

}

function celsiusToFarenheit (celsius) {
    let farenheit;
    if (typeof celsius !== 'float'){
        farenheit = parseFloat(celsius)
    } else {
        farenheit = celsius
    }

    if (farenheit !== NaN){
        farenheit = (farenheit.toFixed(2)*1.8) + 32;
        return farenheit;
    } else {
        let err = "Input was not a number "
        return err;
    }
}

function farenheitToCelsius (farenheit) {
    let celsius;
    if (typeof farenheit !== 'float'){
        celsius = parseFloat(farenheit)
    } else {
        celsius = farenheit
    }

    if (celsius !== NaN){
        celsius = ((celsius.toFixed(2))-32)/1.8;
        return celsius;
    } else {
        let err = "Input was not a number "
        return err;
    }

};

function farenheitToKelvin (farenheit) {
    let kelvin;
    if (typeof farenheit !== 'float'){
        kelvin = parseFloat(farenheit)
    } else {
        kelvin = farenheit
    }

    if (kelvin !== NaN){
        kelvin = (((kelvin.toFixed(2))-32)/1.8)-273.15;
        return kelvin;
    } else {
        let err = "Input was not a number "
        return err;
    }

};

function celsiusToKelvin (celsius) {
    let kelvin;
    if (typeof celsius !== 'float'){
        kelvin = parseFloat(celsius)
    } else {
        kelvin = celsius
    }

    if (kelvin !== NaN){
        kelvin = kelvin.toFixed(2)-273.15;
        return kelvin;
    } else {
        let err = "Input was not a number "
        return err;
    }

};


