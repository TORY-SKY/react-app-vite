import React, { useEffect, useState } from "react";

const TheUseEffect = () => {
  const [placeholder, setPlaceholder] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPlaceholder(data);
      } catch (error) {
        console.error("Error fetching data from API ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="row m-4 ">
      {placeholder.map((post) => (
        <div
          className="container col-4 bg-success px-3 py-5 my-2 w-auto h-auto rounded  "
          key={post.id}
        >
          <ul>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TheUseEffect;
