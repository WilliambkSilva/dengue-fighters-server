import { Router } from "express";
import CreateUser from "../controllers/CreateUserDb.js";
const router = Router()

router.post('/', CreateUser)

export default router