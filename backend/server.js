import express from "express"
import events from "./data/events.js"
import dotenv from "dotenv"
import db from "./config/db.js";
import connectDB from "./config/db.js";
import eventRoutes from './routes/eventRoutes.js';
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import orderRoutes from './routes/orderRoutes.js'
const app = express()
dotenv.config()
connectDB()
app.use(express.json())
app.use("/api/events", eventRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
app.use(errorHandler)


const port = process.env.PORT || 5000
app.listen(port,console.log(`server is running in ${process.env.NODE_ENV} mode on port ${port}`));

