import express from "express";
import { accessShareLink, createShareLink, deleteShareLink, getUserShareLinks } from "../controllers/shareController.js";
import { protect } from "../middleware/auth.js";

const shareRouter = express.Router()

shareRouter.get("/access/:token", accessShareLink)

shareRouter.use(protect)

shareRouter.post("/", createShareLink)
shareRouter.get("/",getUserShareLinks)
shareRouter.delete("/:id", deleteShareLink)

export default shareRouter;