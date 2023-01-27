import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";

import { incrementCount } from "./state-management/actions/count";

function Count(props) {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <button
        onClick={() => {
          // setCount((count) => count + 1);
          props.dispatch(incrementCount());
        }}
      >
        Increment Count
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const CountComp = connect(mapStateToProps)(Count);

function App() {
  return (
    <div className="App">
      <CountComp />
    </div>
  );
}

export default App;
