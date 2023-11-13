import express from 'express';
import PlumbsClient from "../../src";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const plumbs = new PlumbsClient('');
    const monographList = await plumbs.monograph().getList();
    res.send(monographList.data);

});

app.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});