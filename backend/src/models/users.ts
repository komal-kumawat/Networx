import mongoose from "mongoose";

export interface IUser extends Document{
    name: string,
    username: string,
    email: string,
    active: boolean,
    password: string;
    profilePicture: string;
    tokens: { token: string; createdAt: Date; expiresAt: Date },
    createdAt: Date,
    expiresAt: Date

}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true, min: 3, trim: true },
    username: { type: String, required: true, trim: true, min: 3, unique: true },
    email: { type: String, required: true, trim: true, unique: true , lowercase:true },
    active: { type: Boolean, default: true },
    password: { type: String, minLength: 6, required: true },
    profilePicture: { type: String, default: "default.jpg" },
    tokens: [
        {
            token: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            expiresAt: { type: Date, required: true },
        },
    ],

}, { timestamps: true });


const User = mongoose.model<IUser>("User" , userSchema);
export default User;