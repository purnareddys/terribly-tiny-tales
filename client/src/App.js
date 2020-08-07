import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import { Button, Container, Spinner } from "react-bootstrap";
import { Context } from "./Context";
function App() {
  const [inputN, setInputN] = useState("");
  const [clicked, setClicked] = useState(false);
  const [err, setError] = useState(false);

  const checkInput = () => {
    if (inputN.length > 0 && inputN > 0) {
      clearData();
      getData(inputN);
      setClicked(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  const { getData, data, clearData } = useContext(Context);
  return (
    <>
      <Header />
      <form className="raise">
        <label className="topN">
          <h3>Top N</h3>
          <input
            type="number"
            className="num__input"
            required
            onChange={(e) => setInputN(e.target.value)}
          />
          <Button
            onClick={() => {
              checkInput();
            }}
            style={{ marginTop: 10 }}
            variant="outline-success"
            size="lg"
          >
            Find
          </Button>
        </label>
      </form>

      {/* only display the table if the data is fetched */}

      <Container className="results-table">
        {data.length > 0
          ? !err && <ResultTable />
          : clicked && (
              <Spinner
                animation="grow"
                variant="success"
                style={{ marginLeft: 550 }}
              />
            )}
      </Container>

      {/* {Display error message if user enters any invalid input} */}

      <div className="error-display">
        {err && <p>Please provide valid input</p>}
      </div>
    </>
  );
}

export default App;
