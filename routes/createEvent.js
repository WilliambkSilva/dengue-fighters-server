import { Router } from "express";
import CreateEventDb from "../controllers/CreateEventDb.js";
const router = Router()

router.post('/', CreateEventDb)

export default router