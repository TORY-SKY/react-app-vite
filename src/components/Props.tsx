import { useState } from "react";

interface StateProperties {
  cities: string;
  heading: string;
} //Props here
function Properties({ cities, heading }: StateProperties) {
  const [state, setState] = useState(1);
  const [selectedCity, setselectedCity] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedCity === index
                ? "list-group-item acive"
                : "list-group-item "
            }
            key={index}
            onClick={() => setselectedCity(index)}
          >
            {city}
          </li>
        ))}
      </ul>
      <button onClick={() => setState(state + 1)}>Add</button>
    </>
  );
}
export default Properties;
