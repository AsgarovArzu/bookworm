import React, { useState } from 'react';
import '../LeftSide.css'
function PriceRangeSlider() {
    const [value, setValue] = useState(5); 
    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);
    };

    return (
        <div>
        <p>Selected Price: ${value}</p>
        <span>$5</span>
        <span className="text" >$150</span>
        <div>
            <input
                className='range'
                type="range"
                min={5}
                max={150}
                step={1}
                value={value}
                onChange={handleSliderChange}
            />
        </div>
            

        </div>
    );
}

export default PriceRangeSlider;
