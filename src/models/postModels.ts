import { Schema, model, Document, Types } from 'mongoose';
import { IUser } from './users_models';

export interface IPost extends Document {
    title: string;
    content: string;
    author: Types.ObjectId | IUser;
    likes: Types.ObjectId[] | IUser[];
    createdAt: Date;
    edited: boolean;
}

const postSchema = new Schema<IPost>({
    title: {
        type: String, required: true},
    content: {
        type: String, required: true},
    author: {
        type: Schema.Types.ObjectId, ref: 'User', required: true},
    likes: [{
        type: Schema.Types.ObjectId, ref: 'User'}],
    edited: {
        type: Boolean, required: false, default: false},
    createdAt: {
        type: Date, default: Date.now},
});

const Post = model<IPost> ('Post', postSchema);
export default Post;