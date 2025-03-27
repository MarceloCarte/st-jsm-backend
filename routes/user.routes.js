import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ tittle: "CREATE new user" }));
userRouter.put("/:id", (req, res) => res.send({ tittle: "UPDATE user" }));
userRouter.delete("/:id", (req, res) => res.send({ tittle: "DELETE user" }));

export default userRouter;
