const { v4: uuidv4 } = require('uuid');

const createExpressionModel = (key, operator, value, score) => {
  const id = uuidv4().replace(/-/g, '').substring(0, 10); // Remove hyphens and take the first 10 characters
  const output = {
    value: value,
    operator: operator,
    score: score,
  };

  return {
    id,
    key,
    output,
  };
};

export default createExpressionModel;
