import React, { useMemo } from "react";

const MemoMan = () => {
  const numbers = [10, 20, 30, 40];
  let total = useMemo(() => numbers.reduce((acc, no) => acc + no), 0);
  console.log(total);
  return <div></div>;
};

export default MemoMan;
