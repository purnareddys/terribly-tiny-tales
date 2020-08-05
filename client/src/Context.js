import React, { useState } from "react";
import axios from "axios";
const Context = React.createContext();

const ContextProvider = (props) => {
  const [data, setData] = useState([]);
  const getData = (N) => {
    axios.get(`http://localhost:5000/${N}`).then((response) => {
      setData(response.data);
    });
  };
  return (
    <Context.Provider value={{ getData, data }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
