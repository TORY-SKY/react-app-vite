import React, { useMemo } from "react";

const ExpensiveCompnent = ({ a, b }) => {
  const result = useMemo(() => {
    console.log(`state change`);
    return a + b;
  }, [a, b]);
  return;
  <div>
    <h1>{result}</h1>
  </div>;
};

function MemoMan() {
  return (
    <div>
      <ExpensiveCompnent a={1} b={2} />
    </div>
  );
}

export default MemoMan;
