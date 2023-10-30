import { Fragment } from "react";
function ListGroup() {
  const Cities = ["Lagos", "Ibadan", "Ilorin", "Kano"];
  return (
    <Fragment>
      <h2>A bunch of List Items</h2>
      <ul className="list-group">
        {Cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
