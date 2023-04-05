import React from "react";
import B from "./B";
import AppContext from "./Context";
import { useState } from "react";

const A = () => {
    const [state, setState] = useState("");
    const [data, setData] = useState("");
  return (
    <div>
      <h2>A component</h2>
          <input type="text" placeholder="enter you name" onChange={(e)=>{setState(e.target.value)}} />
      <button onClick={()=>{setData(state)}}>Send Data</button>
      <hr />
      <AppContext.Provider value={data}>
        <B />
      </AppContext.Provider>
    </div>
  );
};

export default A;
