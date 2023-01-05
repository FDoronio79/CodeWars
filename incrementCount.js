import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div id="mainArea">
      <p>button count: <span>{count}</span></p>
      <button onClick={() => setCount(count + 1)} id="mainButton">Increase</button>
    </div>
  );
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);