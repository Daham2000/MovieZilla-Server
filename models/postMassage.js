import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    director: String,
    tags: [String],
    selectedFile: String,
    boxOffice: String,
    trailerLink: String,
    downloadLink: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PastMessage = mongoose.model('PostMessage', postSchema);

export default PastMessage;