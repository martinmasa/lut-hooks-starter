import React, { useRef } from 'react';
import Toggle from './Toggle';

import { useTitleInput } from './hooks/useTitleInput';

const formSubmit = (value, setValue) => {
  // eslint-disable-next-line no-console
  console.log(`Form submitted with ${value}!`);
  setValue('');
};

const App = () => {
  const [name, setName] = useTitleInput('');
  const [refClass, setRefClass] = useTitleInput('');

  const ref = useRef();

  return (
    <div className="main-wrapper" ref={ref}>
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

      <section>
        <button type="button" onClick={() => setRefClass(ref.current.className)}>
          Show ref class
        </button>

        <p>{refClass}</p>
      </section>
    </div>
  );
};

export default App;
