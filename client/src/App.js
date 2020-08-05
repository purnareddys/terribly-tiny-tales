import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import { Button, Container } from "react-bootstrap";
function App() {
  useEffect(() => {
    axios.get(`http://localhost:5000/`).then((response) => {
      console.log(response.data);
    });
  }, []);
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
