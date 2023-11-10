import React, { useEffect, useState } from "react";

function APIFe() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [Error, setError] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Brotherly, theres a network failed request");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setloading(false);
      }
    };
    FetchData();
  }, []);
  console.log(data, "THE CONSOLE IS HERE");
  if (loading) {
    return <p>...loading</p>;
  }
  if (Error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data.map((item) => {
        <li key={item.id}>{item.name} VICTORY SKY</li>;
      })}
    </>
  );
}

export default APIFe;
