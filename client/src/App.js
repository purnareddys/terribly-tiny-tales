import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import { Button, Container } from "react-bootstrap";
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
      <Container className="results-table">
        <ResultTable />
      </Container>
    </>
  );
}

export default App;
