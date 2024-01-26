import React, { useState, useEffect } from 'react';
import countries from "../resources/countryData.json";

function Autocomplete() {
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const suggestions = countries.filter(country => country.name.toLowerCase().startsWith(value.toLowerCase()));

    const handleChange = (e) => {
        setValue(e.target.value);
        if (e.target.value) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };
    

    const handleSuggestionClick = (suggestion) => {
        setValue(suggestion.name);
        setShowSuggestions(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    

    return (
        <>
            <div>
                <input placeholder='COUNTRY NAME' type='text' value={value} onChange={handleChange} onKeyDown={handleKeyPress} />
                <button>
                    S E A R C H
                </button>


                <div className='suggestions'>

                    {showSuggestions && (
                        <div>
                            {suggestions.length > 0 ? (

                                suggestions.map((suggestion, index) => (

                                    <h3 key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion.name}
                                    </h3>
                                ))
                            ) : (

                                <p>
                                    RESULTS NOT FOUND
                                </p>
                                
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Autocomplete;
