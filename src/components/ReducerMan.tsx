import { useReducer, useState } from "react";
//App state interface
interface AppState {
  names: [];
  name: string;
}
//App action interface
interface AppAction {
  type: "Addition" | "Subtraction" | "Change_Name";
}
//the Reducer function

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "Addition":
      return { ...state, names: state.name };
    case "Subtraction":
      return { ...state, names: state.name };
    case "Change_Name":
      return { ...state, names: action.payload };
    default:
      return state;
  }
};

const ReducerMan = () => {
  const [decstate, setDecState] = useState({ names: [], name: "Vic" });

  //declaring the useReducer
  //are sure there's something called self-taught programmer?
  //im not sure
  const [state, dispatch] = useReducer(reducer, decstate);
  return (
    <div>
      <h2>{state.names}</h2>
      <h2>{(state.name, state.names)}</h2>
      <br />
      <input
        type="text"
        value={state.names}
        onChange={(e) => {
          dispatch({ ...state, type: "Change_Name", payload: e.target.value });
        }}
      />
    </div>
  );
};

export default ReducerMan;
