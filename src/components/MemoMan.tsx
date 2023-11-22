import { useMemo } from "react";
/*In React, the useMemo hook is used to memoize the result of a computation. It is often employed to optimize performance by preventing unnecessary recalculations of values during re-renders.

Here's a breakdown of how useMemo works and when it's useful:

Memoization:

Memoization is a technique where the results of expensive function calls are cached so that if the function is called with the same arguments again, the cached result is returned instead of recalculating the result.
Basic Syntax:

useMemo takes two arguments: a function that performs the computation and an array of dependencies. The result of the computation is memoized and will only be recalculated if one of the dependencies has changed. */
interface Thevalue {
  value: number;
}
const ExpensiveComp = ({ value }: Thevalue) => {
  const squaredValue = useMemo(() => {
    console.log("calculating squaredValue...");
    return value * value;
  }, [value]);
  return (
    <>
      <h2>Value: {value}</h2>
      <h2>SquaredValue: {squaredValue}</h2>
    </>
  );
};
export default ExpensiveComp;
