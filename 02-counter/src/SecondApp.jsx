import React from 'react';

const SecondApp = ({ counter, onAdd, onRemove }) => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Counter: <span style={{display:`inline-block`,width:`2rem`}}>{counter}</span></h1>
            <div className="d-flex justify-content-center gap-3 mt-3">
                <button style={{ visibility: counter <= 9 ? 'visible' : 'hidden' }} className="btn btn-primary" onClick={onAdd}>
                    Add
                </button>

                <button style={{ visibility: counter > 1 ? 'visible' : 'hidden' }} className="btn btn-danger" onClick={onRemove}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default SecondApp;
