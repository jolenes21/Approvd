import { createMember } from "../controllers";
import * as express from "express";

export const createMemberRoutes = express.Router();

createMemberRoutes.post("/", createMember);
