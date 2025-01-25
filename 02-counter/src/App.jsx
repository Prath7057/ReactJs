import React, { useState } from 'react';
import FirstApp from './FirstApp.jsx';
import SecondApp from './SecondApp.jsx';
import MessageApp from './MessageApp.jsx';

function App() {
  const [counter, setCounter] = useState(1);
  const [message, setmessage] = useState('');

  const handleAdd = () => {
    if (counter < 10) {setmessage('');
      setCounter(counter + 1);
      
    } else {
      setmessage('The limit is 10');
    }
  };

  const handleRemove = () => {
    if (counter > 1) {
      setmessage('');
      setCounter(counter - 1);
    } else {
      setmessage('The limit is 1');
    }
  };

  return (
    <div>
      <MessageApp message={message} />
      <FirstApp counter={counter} />
      <SecondApp counter={counter} onAdd={handleAdd} onRemove={handleRemove} />
    </div>
  );
}

export default App;
