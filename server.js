// Entry point used to spin up the server

const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
