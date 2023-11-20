import { useMemo } from "react";
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
