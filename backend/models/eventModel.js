import mongoose from "mongoose";

// const reviewSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required:true
//     },
//     rating: {
//         type: Number,
//         required:true
//     },
//     comment: {
//         type: String,
//         required:true
//     }
// }, {
//     timestamps: true
// })
const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ticketprice: {
        type: Number,
        required: true,
        default: 0
    },
    ticketsavail: {
        type: Number,
        required: true
    },
    followers: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    // reviews: [reviewSchema]
}, {
    timestamps: true
})

const Event = mongoose.model("Event", eventSchema)
// console.log("event schema made")
export default Event