import mongoose from "mongoose";
import "dotenv/config";
import Post from "../../entities/posts/post.model.js";

export const postSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});

        const posts = [
            {
                description: "Exploring new hobbies and interests.",
                userId: "65edc858352c4f2a5cf087c1",
            },
            {
                description: "Reading a fascinating book about history.",
                userId: "65edc858352c4f2a5cf087c2",
            },
            {
                description: "Going for a hike in the mountains.",
                userId: "65edc858352c4f2a5cf087c3",
            },
            {
                description: "Starting a new fitness routine.",
                userId: "65edc858352c4f2a5cf087c4",
            },
            {
                description: "Watching a documentary about space.",
                userId: "65edc858352c4f2a5cf087c5",
            },
            {
                description: "Trying out a new painting technique.",
                userId: "65edc858352c4f2a5cf087c6",
            },
            {
                description: "Joining a local sports team.",
                userId: "65edc858352c4f2a5cf087c7",
            },
            {
                description: "Learning to play a musical instrument.",
                userId: "65edc858352c4f2a5cf087c8",
            },
            {
                description: "Volunteering at a community center.",
                userId: "65edc858352c4f2a5cf087c9",
            },
            {
                description: "Starting a garden in my backyard.",
                userId: "65edc858352c4f2a5cf087ca",
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