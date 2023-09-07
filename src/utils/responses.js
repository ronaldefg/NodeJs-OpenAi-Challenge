const openai = require('../openai');

const generateResponse = async (input) => {
  const prompt = `The following is a conversation with an AI assistant. The assistant helps you with your tasks and answers your questions. \n\nYou: ${input}\nAI:`;
  const completions = await openai.completions.create({
    engine: 'davinci',
    prompt,
    maxTokens: 1024,
    n: 1,
    stop: '\n',
  });
  const response = completions.choices[0].text.trim();
  return response;
};

module.exports = {
  generateResponse,
};