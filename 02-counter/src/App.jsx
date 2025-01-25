import React, { useState } from 'react';
import FirstApp from './FirstApp.jsx';
import SecondApp from './SecondApp.jsx';

function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <FirstApp counter={counter} />
      <SecondApp counter={counter} onAdd={handleAdd} onRemove={handleRemove} />
    </div>
  );
}

export default App;
