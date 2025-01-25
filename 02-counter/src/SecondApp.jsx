import React from 'react';

const SecondApp = ({ counter, onAdd, onRemove }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Counter: {counter}</h1>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-primary" onClick={onAdd}>
          Add
        </button>
        <button className="btn btn-danger" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default SecondApp;
