import React from 'react';

export default function App() {
  const [display, setDisplay] = React.useState("")
  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
    </div>
  );
}
