import React, { useEffect, useState } from "react";

function APIFe() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [Error, setError] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("https://www.coingecko.com/en/api");
        if (!response.ok) {
          throw new Error("Brotherly, theres a network failed request");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setError(Error);
      } finally {
        setloading(false);
      }
    };
    FetchData();
  });
  if (loading) {
    return <p>...loading</p>;
  }
  if (Error) {
    return <p>Error: {Error.message}</p>;
  }
  return (
    <>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default APIFe;
