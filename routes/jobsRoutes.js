import express from "express";
import authenticateUser from "../middleware/auth.js";
const router = express.Router();

import {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    showStats
} from "../controllers/jobsController.js";

router
    .route("/")
    .post(authenticateUser, createJob)
    .get(authenticateUser, getAllJobs);
router.route("/stats").get(authenticateUser, showStats);
router
    .route("/:id")
    .delete(authenticateUser, deleteJob)
    .patch(authenticateUser, updateJob);

export default router;
