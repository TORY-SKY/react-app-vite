import { useState } from "react";

// Import the necessary React components and hooks.
function ListGroup() {
  // Define an array of cities.
  let Cities = ["Lagos", "Ibadan", "Ilorin", "Port Harcourt"];

  // Declare a piece of state to keep track of the selected item.
  const [SelectedItem, setSelectedItem] = useState(-1);

  return (
    // Use a React fragment to group multiple elements without introducing an additional DOM element.
    <>
      {/* Display a heading. */}
      <h2>A bunch of List Items</h2>

      {/* Create an unordered list with a class name. */}
      <ul className="list-group">
        {/* Map over the 'Cities' array and render a list item for each city. */}
        {Cities.map((city, index) => (
          <li
            // Set the class name for the list item. If the 'index' matches the 'SelectedItem', it gets the 'active' class.
            className={
              SelectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // Add an 'onClick' event handler to select the clicked item.
            onClick={() => {
              setSelectedItem(index);
            }}
            // Set a 'key' attribute to help React identify list items when they change or re-order.
            key={city}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

// Export the 'ListGroup' component for use in other parts of your application.
export default ListGroup;
