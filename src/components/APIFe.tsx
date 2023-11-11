import { useEffect, useState } from "react";

function APIFe() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
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
        setError(error);
      } finally {
        setloading(false);
      }
    };
    FetchData();
  }, []);
  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <pre>{/*JSON.stringify(data, null, 2)*/}</pre>
      <h1>Data from API:</h1>

      <h6>{JSON.stringify(data)}</h6>
    </>
  );
}

export default APIFe;
