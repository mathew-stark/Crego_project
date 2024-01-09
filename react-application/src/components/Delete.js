import React, { useContext, useState } from 'react';
import { Context } from '../App';

const Delete = () => {
  const { data, handleDelete } = useContext(Context);
  const [inputId, setInputId] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => setInputId(e.target.value);

  const handleDeleteClick = () => {
    const idToDelete = inputId.trim();

    if (!idToDelete) {
      setResult('Please enter a non-empty ID.');
      return;
    }

    const updatedData = data.rules.filter(item => item.id !== idToDelete);
    const deletionMessage = updatedData.length !== data.length
      ? `Item with ID ${idToDelete} deleted.`
      : `Item with ID ${idToDelete} not found.`;

    handleDelete(idToDelete);
    setResult(deletionMessage);
    setInputId('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Delete Item by ID</h2>
      <div className="mb-3">
        <label className="form-label">Enter ID to delete:</label>
        <input
          type="text"
          className="form-control mb-3"
          value={inputId}
          onChange={handleInputChange}
        />
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      {result && <div className="mt-2">{result}</div>}
    </div>
  );
};

export default Delete;
