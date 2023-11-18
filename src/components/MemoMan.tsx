import { useMemo } from "react";

const ExpensiveComp = ({ value }) => {
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
