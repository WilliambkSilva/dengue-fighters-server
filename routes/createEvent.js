import { Router } from "express";
import CreateEventDb from "../controllers/createEventDb.js";
const router = Router()

router.post('/', CreateEventDb)

export default router