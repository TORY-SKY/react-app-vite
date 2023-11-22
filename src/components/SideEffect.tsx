import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [state, setState] = useState();
  //the Use Effect
  useEffect(
    fetch("https://api.chucknorris.io/jokes/random")
      .then((reponse) => reponse.json())
      .then((data) => setState(data.value)),
    []
  );
  return <div></div>;
};

export default SideEffect;
