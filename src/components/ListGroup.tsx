import { Fragment } from "react";
//import { MouseEvent } from "react";
function ListGroup() {
  let Cities = ["Lagos", "Ibadan", "Ilorin", "Port Harcourt"];
  //Conditional Function
  //const COnditionaFunc = () => {
  //Conditional Statement here
  //return Cities.length === 1 ? alert("on point bro") : null;
  //Conditional Statement here
  // };
  const HandleClick = (index) => console.log(index);
  return (
    <>
      <h2>A bunch of List Items</h2>

      <ul className="list-group">
        {Cities.map((city) => (
          <li className="list-group-item" onClick={HandleClick} key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
