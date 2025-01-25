import React from 'react';

const MessageApp = ({ message }) => {
  return (
    <div className="mt-3 container" style={{height:`4rem`,padding:`0px;`}}>
      {message && (
        <div className="alert alert-warning ">
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
};

export default MessageApp;
