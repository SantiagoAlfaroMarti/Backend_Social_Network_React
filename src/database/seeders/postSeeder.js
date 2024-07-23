import mongoose from "mongoose";
import "dotenv/config";
import Post from "../../entities/posts/post.model.js";

export const postSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});

        const posts = [
            {
                description: "Exploring new hobbies and interests.",
                userId: "65edc858352c4f2a5cf087ba",
            },
            {
                description: "Reading a fascinating book about history.",
                userId: "71gdc860352c4f2a5cf087bc",
            },
            {
                description: "Going for a hike in the mountains.",
                userId: "72hedc861352c4f2a5cf087bd",
            },
            {
                description: "Starting a new fitness routine.",
                userId: "73iedc862352c4f2a5cf087be",
            },
            {
                description: "Watching a documentary about space.",
                userId: "65edc858352c4f2a5cf087bb",
            },
            {
                description: "Trying out a new painting technique.",
                userId: "74jedc863352c4f2a5cf087bf",
            },
            {
                description: "Joining a local sports team.",
                userId: "75kedc864352c4f2a5cf087c0",
            },
            {
                description: "Learning to play a musical instrument.",
                userId: "76ledc865352c4f2a5cf087c1",
            },
            {
                description: "Volunteering at a community center.",
                userId: "78nedc867352c4f2a5cf087c3",
            },
            {
                description: "Starting a garden in my backyard.",
                userId: "79oedc868352c4f2a5cf087c4",
            },
        ];

        await Post.insertMany(posts);

        console.log("============================");
        console.log("Posts seeder executed successfully");
        console.log("============================");
    } catch (error) {
        console.log("============================");
        console.log("Error seeding posts:", error);
        console.log("============================");
    } finally {
        await mongoose.connection.close()
    }
}
export default postSeeder