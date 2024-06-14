import { Router } from "express";
import GetEventsDb from '../controllers/getEventDb.js'
const router = Router()

router.get('/', GetEventsDb)

export default router