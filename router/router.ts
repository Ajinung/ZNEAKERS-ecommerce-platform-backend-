import { Router } from "express";
import { allUSers, login, register } from "../controller/userController";

const router = Router();

router.route("/register").post(register);
router.route("/signin").post(login);
router.route("/users").get(allUSers);

export default router;
