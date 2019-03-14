// tslint:disable-next-line:no-console
import express from "express";

const app = express();

const port = 5000;

app.get("/", (req, res) => res.send("Hello World! Nice to see you"));

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));
