import express from "express";
import { getStudents } from "./controllers.js";

const router = express.Router(); 

router.get('/', getStudents)

export default router;