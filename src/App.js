import React, { useState } from 'react';
import Toggle from './Toggle';

const formSubmit = (value, setValue) => {
  // eslint-disable-next-line no-console
  console.log(`Form submitted with ${value}!`);
  setValue('');
};

const App = () => {
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>

      <Toggle />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmit(name, setName);
        }}
      >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
