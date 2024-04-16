import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    description: {type: String},
    course: {type: String, required: true, unique: true},
    lessons: [
        {
            id: String,
            name: String,
            description: String,
            module: String
        }
        ],
    },
    { collection: "modules" });
export default moduleSchema;