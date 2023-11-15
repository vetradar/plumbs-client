import express from 'express';
import PlumbsClient from "../../src";

const app = express();
const port = 3000;

app.get('/', async (_, res) => {
    const plumbs = new PlumbsClient('PuYqYzMB.lIIRuTS3sQ4Y7zZaZkkN3PvKZgMK7oC9')
    const monographList = await plumbs.monograph().getList()
    res.send(monographList);
});

app.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});