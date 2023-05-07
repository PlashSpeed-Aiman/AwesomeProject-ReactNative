import { Card, Button, TextInput, List } from 'react-native-paper';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import DropDown from 'react-native-paper-dropdown';


const phoneCode = [
    {
        label: "Malaysia +60",
        value: "60"
    },
    {
        label: "Brunei +673",
        value: "673"
    },
    {
        label: "Cambodia +855",
        value: "855"
    },
    {
        label: "Indonesia +62",
        value: "62"
    },
    {
        label: "Laos +856",
        value: "856"
    },
    {
        label: "Myanmar +95",
        value: "95"
    },
    {
        label: "Philippines +63",
        value: "63"
    },
    {
        label: "Singapore +65",
        value: "65"
    },
    {
        label: "Thailand +66",
        value: "66"
    },
    {
        label: "Vietnam +84",
        value: "84"
    },
    {
        label: "Nigeria +234",
        value: "234"
    },
    {
        label: "Egypt +20",
        value: "20"
    },
    {
        label: "India +91",
        value: "91"
    },
    {
        label: "Pakistan +92",
        value: "92"
    },
    {
        label: "Bangladesh +880",
        value: "880"
    },
    {
        label: "Sri Lanka +94",
        value: "94"
    },
    {
        label: "Nepal +977",
        value: "977"
    },
    {
        label: "South Africa +27",
        value: "27"
    },
    {
        label: "Kenya +254",
        value: "254"
    },
    {
        label: "Tanzania +255",
        value: "255"
    },
    {
        label: "Uganda +256",
        value: "256"
    }
    ,
    {
        label:'Others (Input Your Own Country Code)',
        value:''
    }
];
export const CountryCodeComponent = React.memo(({ countryCodeVal, countryCodeSetter }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    
    // console.log(phoneCode)
    return (
        <DropDown
            list={phoneCode}
            visible={showDropDown}
            onDismiss={() => setShowDropDown(false)}
            showDropDown={() => setShowDropDown(true)}
            setValue={countryCodeSetter}
            value={countryCodeVal}
        >
        </DropDown>
    )
})
