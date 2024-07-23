import { Schema, model } from 'mongoose';

const PostSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        like: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        }],
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const Post = model('Post', PostSchema);
export default Post;