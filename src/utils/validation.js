const validateInput = (input) => {
  if (!input) {
    throw new Error('Input cannot be empty');
  }
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  if (input.length > 1024) {
    throw new Error('Input must be less than or equal to 1024 characters');
  }
  return input;
};

module.exports = {
  validateInput,
};