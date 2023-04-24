import { Card, Button, TextInput, List } from 'react-native-paper';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import DropDown from 'react-native-paper-dropdown';

export default function CountryCodeComponent({ countryCodeVal, countryCodeSetter }) {
    const [showDropDown, setShowDropDown] = useState(false);

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
            label: "Others (Put code on your own)",
            value: ""
        }
    ];

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
}
