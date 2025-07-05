import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-4">{count}</h2>
            <button
              className="btn btn-danger mx-4 btn-lg"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
            -
            </button>

            <button
              className="btn btn-success mx-4 btn-lg"
              onClick={() => setCount(count + 1)}
            >
            +
            </button>

            <button
              className="btn btn-secondary mx-4"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
