import Auth from "../models/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
        const userExists = await Auth.findOne({email});     
        if (!userExists) {
            return res.status(404).json({ message: "Invalid email" });
        }
        const isMatch = await bcrypt.compare(password, userExists.password);
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: userExists._id }, "abc", { expiresIn: "1d" });
        res.status(200).json({ message: "Login successful",userExists, token });
    }

    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const UserProfile = async (req, res) => {    
    try {
        res.status(200).json({ user: req.user });
    }
    catch (error) {
        res.status(500).json({error});
    }
};