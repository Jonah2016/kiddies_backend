# Purpose

Technology Considerations: For the backend framework, ExpressJS was evaluated. ExpressJS is well-established and offers more flexibility and large package access suitable for medium to larger applications. We choose NodeJS which is also a more lenient and easy to use technology which will speed up our development process while providing similar capabilities.

This is a node backend server for Kiddies Adventure Zone project. This will server APIs for the React frontend.

## Note

This can be adopted for use on library projects as well.

### Installation

To install Kiddies Backend locally, follow these steps:

```
    Clone the repository: git clone https://github.com/Jonah2016/kiddies_backend.git
    Navigate to the project directory: cd kiddies_backend
    Install dependencies: npm install
    Create an `.env` file and provide the following from the <b><a href="https://github.com/Jonah2016/kiddies_backend">kiddies_backend</a></b> project
    1. CONNECTION_STRING={mongo DB connection_string}
    2. PORT=3001
    3. ACCESS_TOKEN_SECRETE=
```

### Usage

After installing the project, you can run it locally using the following command:

```
npm start
```

Visit `http://localhost:{PORT}/`` in your web browser to access Kiddies Adventure Zone.
Contributing

We welcome contributions from the community to make Kiddies Adventure Zone even better! If you would like to contribute, please follow these steps:

    Fork the repository.
    Create a new branch for your feature: git checkout -b feature-name
    Make your changes and commit them: git commit -m 'Add new feature'
    Push to your branch: git push origin feature-name
    Submit a pull request detailing your changes.

### Related Projects

API: This backend node application is default for a frontend called <b><a href="https://github.com/Jonah2016/kiddies_adventure_zone">kiddies_adventure_zone</a></b>
