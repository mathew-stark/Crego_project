import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Expression from '../Models/Expression';
import { Context } from '../App';

const ExpressionComponent = () => {
  const { data, handleChange, handleCombinator } = useContext(Context);

  const [currentState, setCurrentState] = useState({
    option: '',
    operation: '',
    value: '',
    score: '',
    combinator : '',
  });

  const handleInputChange = (field, value) => {

    // if (field === 'value' || field === 'score') {

    //   const parsedValue = parseFloat(value);
    //   updatedValue = isNaN(parsedValue) ? '' : parsedValue;
    // }

    setCurrentState({
      ...currentState,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { option, operation, value, score } = currentState;

    if (!/^[><=]{1,2}$/.test(operation)) {
      alert('Invalid operation');
      return;
    }

    if (!/^\d+$/.test(value) || !/^\d+$/.test(score)) {
      alert('Value and score must be numbers.');
      return;
    }


    const ex = Expression(option || 'Age', operation, value, score);
    handleChange(ex);

    setCurrentState({
      option: '',
      operation: '',
      value: '',
      score: '',
      combinator : data.combinator
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Rules</h2>
      <label className="form-label mb-3">
        Options
        <select
          value={currentState.option}
          onChange={(e) => handleInputChange('option', e.target.value)}
          className="form-select"
        >
          <option value="Age">Age</option>
          <option value="CreditScore">Credit Score</option>
          <option value="AccountBalance">Account Balance</option>
        </select>
      </label>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="operator" className="mb-3">
          <Form.Label>Operator</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Operator"
            value={currentState.operation}
            onChange={(e) => handleInputChange('operation', e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="value" className="mb-3">
          <Form.Label>Value</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Value"
            value={currentState.value}
            onChange={(e) => handleInputChange('value', e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="score" className="mb-3">
          <Form.Label>Score</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Score"
            value={currentState.score}
            onChange={(e) => handleInputChange('score', e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <label className="form-label mb-3">
        Choose Combinator
        <select
          value={currentState.combinator}
          onChange={(e) => {
            handleInputChange('combinator', e.target.value);
            handleCombinator(e.target.value)
          }}
          className="combinator-select"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </label>

    </div>
  );
};

export default ExpressionComponent;
