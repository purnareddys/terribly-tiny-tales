import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import { Button } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      <form className="raise">
        <label className="topN">
          <h3>Top N</h3>
          <input type="text" className="num__input" />
          <Button style={{ marginTop: 10 }} variant="outline-success" size="lg">
            Find
          </Button>
        </label>
      </form>
      <div className="results-table">
        <ResultTable />
      </div>
    </>
  );
}

export default App;
