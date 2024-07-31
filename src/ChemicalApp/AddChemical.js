import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function AddChemical(props) {
  const [chem, setChem] = useState("");
  const [formula, setFor] = useState("");
  const { handle_add } = props;

  return (
    <div className="mb-3 p-3 shadow">
      <h4 className="text-center">Add Chemical</h4>
      <Form>
        <FormGroup>
          <Label>Chemical</Label>
          <Input
            type="text"
            value={chem}
            onChange={(e) => setChem(e.target.value)}
            placeholder="Name Chemical"
            className="col-3 col-lg-3"
          />
        </FormGroup>
        <FormGroup>
          <Label>Formula</Label>
          <Input
            type="text"
            value={formula}
            onChange={(e) => setFor(e.target.value)}
            placeholder="Formula Chemical"
            className="col-3 col-lg-3"
          />
        </FormGroup>
        <Button
          onClick={() => (handle_add(chem, formula), setChem(""), setFor(""))}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
