import React, { useState } from "react";
import axios from "axios";
const Context = React.createContext();

const ContextProvider = (props) => {
  const [data, setData] = useState([]);
  const getData = (N) => {
    axios.get(`/${N}`).then((response) => {
      setData(response.data);
    });
  };
  const clearData = () => {
    setData([]);
  };
  return (
    <Context.Provider value={{ getData, data, clearData }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
