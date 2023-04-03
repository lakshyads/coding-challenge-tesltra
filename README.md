# Telstra Coding Task for Network Software Engineering Spec


## Setup
1. Open terminal in the root directory where package.json resides.
2. Install dependencies
    ```bash
    npm install
    ```
3. Start the application
    ```bash
    npm start
    ```

> Entrypoint: Server.js

---
## Unit tests

This app uses Jest and Supertest library for unit testing.
Run unit tests with
```bash
npm test
```

---

## Create a docker image

```bash
docker image build . -t <your_dockerhub_name>/<container_name>:tag
```

## Spin up docker container
Use the image_id obtained after creating the image in below command

```bash
docker run -p 4000:4000 <image_id>
```
