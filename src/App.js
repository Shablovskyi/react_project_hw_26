import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        alert('Button clicked!');
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h1>React Project</h1>
            <Input
                type="text"
                placeholder="Enter something"
                onChange={handleInputChange}
            />
            <Button text="Click me" type="button" onClick={handleClick} />
            <p>Input value: {inputValue}</p>
        </div>
    );
}

export default App;
