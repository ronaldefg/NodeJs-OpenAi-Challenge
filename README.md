#chatbot

This project is a technical test on Node.js and Express that consists of completing and fixing code and consuming the OpenAI API to generate GPT chat responses.

## Project structure

The project structure is as follows:

```
chatbot
├── node_modules
├── src
│   ├── openai.js
│   ├── server.js
│   └── utils
│     ├── validation.js
│     └── responses.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
- `node_modules`: folder containing the project dependencies.
- `src`: folder containing the project source code.
   - `openai.js`: file that contains the logic to interact with the OpenAI API.
   - `server.js`: File containing the logic to start the Express server and handle HTTP requests.
   - `utils`: folder containing utility files.
     - `validation.js`: file containing functions to validate user input.
     - `responses.js`: file containing functions to generate GPT chat responses.
- `.env`: File containing environment variables, such as the OpenAI API key.
- `.gitignore`: file that specifies the files and folders to ignore when committing to Git.
- `package-lock.json`: Auto-generated file that specifies the exact versions of installed dependencies.
- `package.json`: file containing information about the project and project dependencies.
- `README.md`: file containing information about the project and instructions to run it.

## Instructions to run the project

To run the project, follow the steps below:

1. Clone the repository to your local machine.
2. Create a `.env` file in the project root and add your OpenAI API key as follows: `OPENAI_API_KEY=<your OpenAI API key>`.
3. Run the following command to install the project dependencies: `npm install`.
4. Run the following command to start the server: `npm start`.
5. Open your web browser and go to `http://localhost:3000`.
6. Enter a question or message in the text box and press the "Send" button.
7. The chatbot will generate a response using the OpenAI API and display it on the screen.

## Contributing

If you would like to contribute to this project, please follow the steps below:

1. Fork this repository.
2. Create a branch with your new feature: `git checkout -b my-new-feature`.
3. Make your changes and commit: `git commit -m 'Adding a new feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request to the master branch of the original repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.