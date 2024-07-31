import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import AddChemical from "./AddChemical";
import { addChemical, deleteChemical } from "../redux/ChemicalSlice";
export default function ChemicalItem() {
  const chemicals = useSelector((state) => state.chemicals.chemicals);
  const dispatch = useDispatch();
  const handle_add = (chem, formula) => {
    dispatch(addChemical({ name: chem, formula: formula }));
  };
  return (
    <>
      <Container>
        <h1 className="text-center p-3 m-2">Chemical</h1>
        <AddChemical handle_add={handle_add} />
        <Table className="shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Formula</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {chemicals.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.formula}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => dispatch(deleteChemical(item.id))}>
                    delete
                  </button>
                  {/* <button onClick={() => dispatch(deleteproduct(item.id))}>
                    Xóa
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
