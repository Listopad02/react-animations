import { useState } from "react"

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle color</button>
      <hr />
      <div className="blocks">
        { toggle && <div className="square blue" /> }
      </div>
    </div>
  );
}

export default App;
