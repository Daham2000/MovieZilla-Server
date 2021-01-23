import mongoose from 'mongoose';
import User from '../models/user.js';

export const signup = async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const checkEmail = async (req,res) => {
    const {id : _id} =req.params;
    const result = await User.findById(_id);
    res.json(result);
}
