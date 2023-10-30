import { Fragment } from "react";
function ListGroup() {
  const Cities = ["Lagos", "Ibadan", "Ilorin", "Kano"];
  return (
    <>
      <h2>A bunch of List Items</h2>
      <ul className="list-group">
        {Cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
