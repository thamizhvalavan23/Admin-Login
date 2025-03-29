import express from 'express';
import { allData, deldata, Fetchdata, login, update} from '../adminControl/Controll.js';

const authRouter = express.Router();

authRouter.get('/data' , Fetchdata);
authRouter.get('/all-data' , allData);
authRouter.post('/login' ,login);
authRouter.put('/update:id' ,update);
authRouter.delete('/delete:id' ,deldata);


export default authRouter