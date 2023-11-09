import React, { useState, useEffect } from "react";

const FetchComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://alpha-meme-maker.herokuapp.com/:page")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Theres a network error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Bro check error", error);
      });
  }, []);
  return (
    <div>
      <h1>Hello world {data}</h1>
    </div>
  );
};

export default FetchComponent;
