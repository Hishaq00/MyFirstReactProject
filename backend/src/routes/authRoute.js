import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";


const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

authRouter.get("/admin",authMiddleware,roleMiddleware("admin"), (req, res) => {
    res.status(200).json({ message: "Welcome Admin" });
});

authRouter.get("/attende", authMiddleware, roleMiddleware("attende"), (req, res) => {
    res.status(200).json({ message: "Welcome attende" });
}); 
authRouter.get("/exhibitor", authMiddleware, roleMiddleware("exhibitor"), (req, res) => {
    res.status(200).json({ message: "Welcome exhibitor" });
}); 

export default authRouter;

