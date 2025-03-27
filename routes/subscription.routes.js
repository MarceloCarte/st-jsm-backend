import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getAllSubscriptions,
  getSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, getAllSubscriptions);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ tittle: "GET subscription details" })
);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ tittle: "UPDATE subscription" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ tittle: "DELETE subscription" })
);

subscriptionRouter.get("/user/:id", authorize, getSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ tittle: "CANCEL subscription" })
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ tittle: "GET upcoming renewals" })
);

export default subscriptionRouter;
