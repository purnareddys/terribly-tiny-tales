import React, { useContext } from "react";
import { Context } from "../Context";
import { Table } from "react-bootstrap";

const ResultTable = () => {
  const { data } = useContext(Context);
  return (
    <>
      <h2 style={{ marginLeft: 450 }}>Top N Words</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Word</th>
            <th>Frequency </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.word}</td>
              <td>{ele.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default ResultTable;
