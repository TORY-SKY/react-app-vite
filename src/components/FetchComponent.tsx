import React, { useState, useEffect } from "react";

const FetchComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://alpha-meme-maker.herokuapp.com/:page"
    )
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
      {data ? (
        <p>Welcome</p>
      ) : (
        <div>
          <div className="card" aria-hidden="true">
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <a
                className="btn btn-primary disabled placeholder col-6"
                aria-disabled="true"
              >
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchComponent;
