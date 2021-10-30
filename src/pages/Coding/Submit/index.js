import React from 'react';
import './index.css';

const Submit = ({ finish }) => {

  return (
    <button
      className="submit"
      onClick={ () => finish() }
    >
      結束作答。送出答案
    </button>
  )
}

export default Submit;