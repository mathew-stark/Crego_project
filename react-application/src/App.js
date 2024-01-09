import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpressionComponent from './components/ExpressionComponent';
import Display from './components/Display';


const Context = createContext();

function App() {
  const [data, setData] = useState({ rules: [], combinator: '' });

  const handleChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      rules: [...prevData.rules, value],
    }));
  };

  const handleCombinator = (value) => {
    setData((prevData) => ({
      ...prevData, combinator : value
    }))
  }

  const handleDelete = (id) => {
    const updatedData = data.rules.filter((item) => item.id !== id);
    setData((prevData) => ({
      ...prevData,
      rules: updatedData,
    }));
  };

  return (
    <Context.Provider value={{ data, handleChange, handleDelete, handleCombinator }}>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <ExpressionComponent />

          </div>
          <div className="col-md-4">
            <Display />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
export { Context };
