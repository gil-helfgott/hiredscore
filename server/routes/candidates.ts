import {getCandidates} from "../logic/candidates";
import {Express} from "express";

export function listen(app: Express) {
    app.get('/candidates', async (req, res) => {
        const result = await getCandidates();
        res.send(result);
    });
}