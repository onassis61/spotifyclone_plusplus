import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: String,
        required: true
    }, //Cler user id
    receiverId: {
        type: String,
        required: true
    }, //Clerk user id
    content: {
        type: String,
        required: true
    },
},
 {timestamps: true}
); //createdAt, updateAt

export const Message = mongoose.model("Message", messageSchema);