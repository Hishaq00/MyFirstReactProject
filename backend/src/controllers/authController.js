import Auth from "../models/authModel.js";
import bcrypt from "bcryptjs";
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // Check if user already exists
        const UserExists = await Auth.findOne({ email });
        if (UserExists) {
            return res.status(400).json({ message: "User already exists" });
        }   
      
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Auth.create({
            name,   
            email,
            password: hashedPassword,
            role
        });
        await user.save();

        res.status(201).json({ message: "User registered successfully",user });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await Auth.findOne({
            email,
            password
        });     
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful" });
    }

    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};