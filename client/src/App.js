import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import { Button, Container } from "react-bootstrap";
import { Context } from "./Context";
function App() {
  const [inputN, setInputN] = useState("");

  const { getData, data } = useContext(Context);
  return (
    <>
      <Header />
      <form className="raise">
        <label className="topN">
          <h3>Top N</h3>
          <input
            type="text"
            className="num__input"
            onChange={(e) => setInputN(e.target.value)}
          />
          <Button
            onClick={() => getData(inputN)}
            style={{ marginTop: 10 }}
            variant="outline-success"
            size="lg"
          >
            Find
          </Button>
        </label>
      </form>
      <Container className="results-table">
        {data.length > 0 && <ResultTable />}
      </Container>
    </>
  );
}

export default App;
