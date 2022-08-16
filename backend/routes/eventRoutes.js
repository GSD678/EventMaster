import express from "express";
//import asyncHandler from "express-async-handler";
//import Event from "../models/eventModel.js";

import {getEvents, getEventById } from '../controllers/eventController.js'


const router = express.Router();
// @desc    Fetch all products
// @route   GET /api/events
// @access  Public
router.get('/', getEvents )
// @desc    Fetch a specific product by the id
// @route   GET /api/events/1
// @access  Public
router.get('/:id',getEventById )

export default router;