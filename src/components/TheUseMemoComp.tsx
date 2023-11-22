const items = [1, 4, 8, 3, 6];
const result = items.find((item) => item < 2);

const TheUseMemoComp = () => {
  return (
    <>
      <h1>{result}</h1>
    </>
  );
};

export default TheUseMemoComp;
