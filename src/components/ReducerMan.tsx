import { useReducer } from "react";
//the Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "Addition":
      return { count: state.count + 1 };
    case "Subtraction":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const ReducerMan = () => {
  //declaring the useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "Addition",
          })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "Substraction",
          })
        }
      >
        Substract
      </button>
    </div>
  );
};

export default ReducerMan;
