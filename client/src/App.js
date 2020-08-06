import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import { Button, Container, Spinner } from "react-bootstrap";
import { Context } from "./Context";
function App() {
  const [inputN, setInputN] = useState("");
  const [clicked, setClicked] = useState(false);

  const { getData, data, clearData } = useContext(Context);
  return (
    <>
      <Header />
      <form className="raise">
        <label className="topN">
          <h3>Top N</h3>
          <input
            type="text"
            className="num__input"
            required
            onChange={(e) => setInputN(e.target.value)}
          />
          <Button
            onClick={() => {
              clearData();
              getData(inputN);
              setClicked(true);
            }}
            style={{ marginTop: 10 }}
            variant="outline-success"
            size="lg"
          >
            Find
          </Button>
        </label>
      </form>
      <Container className="results-table">
        {data.length > 0 ? (
          <ResultTable />
        ) : (
          clicked && (
            <Spinner
              animation="grow"
              variant="success"
              style={{ marginLeft: 550 }}
            />
          )
        )}
      </Container>
    </>
  );
}

export default App;
