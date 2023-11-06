import React, { useState, useEffect } from "react";

const APIComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://thecatapi.com/v1/images")
      .then((response) => response.json())
      .then((json) => setData(json.url));
  }, []);
  if (data === null) {
    console.log(data);
    return <div>loading...</div>;
  }
  return (
    <div>
      <img src={data} alt="Victory" />
      <h1>{data}</h1>
    </div>
  );
};

export default APIComponent;
